package server.Login;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class LoginController {

    // @Autowired
	// private LoginCredentialsInterface loginDAO;

    private static final String greeting = "Hello, %s!";
    private static final String message = "Login successful: %s!";

    @RequestMapping(value="/login", method=RequestMethod.PUT)
    public boolean POSTlogin(@RequestBody LoginCredentials info) throws Exception {
        boolean success = info.getPassword().equals("password") ? true : false;
        System.out.println("HIT POSTlogin");
        System.out.println(info.getPassword());
        return success;
    }


}