package server;

import java.util.Map;

// import javax.validation.Valid;

// import com.fasterxml.jackson.databind.ser.std.StdKeySerializers.Default;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    private static final String greeting = "Hello, %s!";
    private static final String message = "Login successful: %s!";

    @RequestMapping(value="/login", method=RequestMethod.GET)
    public String login(@RequestParam Map<String,String> requestParams) throws Exception {
        String name=requestParams.get("name");
        String password="password";    //requestParams.get("password");
        boolean success = password.equals("password") ? true : false;
        
        return "Login test: " + String.format(greeting, name)  + " " + String.format(message, String.valueOf(success));
    }
}