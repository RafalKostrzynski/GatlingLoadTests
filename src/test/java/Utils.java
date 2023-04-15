import java.util.Collections;
import java.util.Iterator;
import java.util.Map;
import java.util.concurrent.ThreadLocalRandom;
import java.util.function.Supplier;
import java.util.stream.Stream;

public class Utils {

    public static String region() {
        final var regions = Region.values();

        return regions[ThreadLocalRandom.current().nextInt(0, regions.length)].name();
    }

    public static String courier() {
        final var couriers = Courier.values();

        return couriers[ThreadLocalRandom.current().nextInt(0, couriers.length)].name();
    }

    public static String product() {
        return "product " + ThreadLocalRandom.current().nextInt(1, 20);
    }

    public static Iterator<Map<String, Object>> userFeeder =
            Stream.generate((Supplier<Map<String, Object>>) () -> {
                        String user = "test" + ThreadLocalRandom.current().nextInt(1, 10);
                        return Collections.singletonMap("user", user);
                    }
            ).iterator();
}
