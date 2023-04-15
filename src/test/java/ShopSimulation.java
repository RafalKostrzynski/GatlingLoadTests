import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;

import java.time.Duration;
import java.util.List;

import static io.gatling.javaapi.core.CoreDsl.StringBody;
import static io.gatling.javaapi.core.CoreDsl.bodyString;
import static io.gatling.javaapi.core.CoreDsl.constantUsersPerSec;
import static io.gatling.javaapi.core.CoreDsl.scenario;
import static io.gatling.javaapi.http.HttpDsl.http;
import static io.gatling.javaapi.http.HttpDsl.status;

public class ShopSimulation extends Simulation {

    public ShopSimulation() {

        final var populationBuilder = authenticationScenario.injectOpen(
                        constantUsersPerSec(10000).during(Duration.ofSeconds(1))
                )
                .protocols(httpProtocol);

        this.setUp(List.of(populationBuilder));
    }

    HttpProtocolBuilder httpProtocol = http
            .baseUrl("https://localhost:8080")
            .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
            .doNotTrackHeader("1")
            .acceptLanguageHeader("en-US,en;q=0.5")
            .acceptEncodingHeader("gzip, deflate")
            .userAgentHeader("Mozilla/5.0 (Windows NT 5.1; rv:31.0) Gecko/20100101 Firefox/31.0");

    ScenarioBuilder authenticationScenario = scenario("Authentication")
            .feed(Utils.userFeeder)
            .exec(http("Authenticate")
                    .post("/v1/api/auth/authenticate")
                    .body(StringBody("""
                            {
                                "username": "#{user}",
                                "password": "#{user}"
                            }
                            """))
                    .asJson()
                    .ignoreProtocolChecks()
                    .check(status().is(200))
                    .check(bodyString().saveAs("token"))
            )
            .exec(
                    http("Calculate order details")
                            .get("/v1/api/order-details")
                            .header("Authorization", "Bearer #{token}")
                            .body(StringBody("""
                                    {
                                        "courier":"%s",
                                        "region":"%s",
                                        "products":["%s", "%s", "%s"]
                                    }
                                    """.formatted(Utils.courier(), Utils.region(), Utils.product(), Utils.product(),
                                    Utils.product()))
                            )
                            .asJson()
                            .ignoreProtocolChecks()
                            .check(status().is(200))
                            .check(bodyString().saveAs("order"))
            )
            .exec(
                    http("Place order")
                            .post("/v1/api/order")
                            .header("Authorization", "Bearer #{token}")
                            .body(StringBody("#{order}"))
                            .asJson()
                            .ignoreProtocolChecks()
                            .check(
                                    status().is(200),
                                    bodyString().exists(),
                                    bodyString().gte("1")
                            )
            );

}
