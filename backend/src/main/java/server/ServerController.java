package server;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class ServerController {

    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }

}