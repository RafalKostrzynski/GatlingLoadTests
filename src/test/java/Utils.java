import java.util.Collections;
import java.util.Iterator;
import java.util.Map;
import java.util.concurrent.ThreadLocalRandom;
import java.util.function.Supplier;
import java.util.stream.Stream;

public class Utils {

    public static Iterator<Map<String, Object>> regionFeeder =
            Stream.generate((Supplier<Map<String, Object>>) () -> {

                        final var regions = Region.values();
                        Region region = regions[ThreadLocalRandom.current().nextInt(0, regions.length)];

                        return Collections.singletonMap("region", region.toString());
                    }
            ).iterator();

    public static Iterator<Map<String, Object>> courierFeeder =
            Stream.generate((Supplier<Map<String, Object>>) () -> {

                        final var couriers = Courier.values();
                        Courier courier = couriers[ThreadLocalRandom.current().nextInt(0, couriers.length)];

                        return Collections.singletonMap("courier", courier.toString());
                    }
            ).iterator();

    public static Iterator<Map<String, Object>> productFeeder =
            Stream.generate((Supplier<Map<String, Object>>) () -> {

                        String product = "product " + ThreadLocalRandom.current().nextInt(1, 20);

                        return Collections.singletonMap("product", product);
                    }
            ).iterator();

    public static Iterator<Map<String, Object>> userFeeder =
            Stream.generate((Supplier<Map<String, Object>>) () -> {

                        String user = "test" + ThreadLocalRandom.current().nextInt(1, 10);

                        return Collections.singletonMap("user", user);
                    }
            ).iterator();
}
