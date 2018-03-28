package server;

import java.util.Map;

// import javax.validation.Valid;

// import com.fasterxml.jackson.databind.ser.std.StdKeySerializers.Default;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import server.LoginCredentials;

@RestController
public class LoginController {

    private static final String greeting = "Hello, %s!";
    private static final String message = "Login successful: %s!";


    @RequestMapping(value="/login", method=RequestMethod.POST)
    public String POSTlogin(@RequestBody LoginCredentials info) throws Exception {
        //String password = "password";    //requestParams.get("password");
        boolean success = info.getPassword().equals("password") ? true : false;
        //System.out.println(info.getName());
        //System.out.println(info.getPassword());
        return "Login test: " + String.format(greeting, info.getName())  + " " + String.format(message, String.valueOf(success));
    }


}