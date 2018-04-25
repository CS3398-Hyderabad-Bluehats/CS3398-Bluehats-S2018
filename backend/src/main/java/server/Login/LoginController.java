package server.Login;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class LoginController {

    @RequestMapping(value="/login", method=RequestMethod.POST)
    public boolean POSTlogin(@RequestBody LoginCredentials info) throws Exception {
        boolean success = info.getPassword().equals("password") ? true : false;
        return success;
    }


}