package server.Login;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class LoginController {

    @Autowired
	private LoginCredentialsDAO loginDAO;

    private static final String greeting = "Hello, %s!";
    private static final String message = "Login successful: %s!";


    @RequestMapping(value="/login", method=RequestMethod.POST)
    public String POSTlogin(@RequestBody LoginCredentials info) throws Exception {
        boolean success = info.getPassword().equals("password") ? true : false;
        return "Login test: " + String.format(greeting, info.getName())  + " " + String.format(message, String.valueOf(success));
    }


}