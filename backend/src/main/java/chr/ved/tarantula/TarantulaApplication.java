package chr.ved.tarantula;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;

@SpringBootApplication
@CrossOrigin(origins =  {"${app.dev.frontend.local}"})
@RestController
public class TarantulaApplication {
    public static void main(String[] args) {
        SpringApplication.run(TarantulaApplication.class);
    }

    // simple GET response for our example purpose, we return a JSON structure
    @RequestMapping(value = "/message", produces = MediaType.APPLICATION_JSON_VALUE)
    public Map<String, String> index() {
        return Collections.singletonMap("message", "Greetings from Spring Boot!");
    }

}
