package server;

import java.util.Map;

// import javax.validation.Valid;

// import com.fasterxml.jackson.databind.ser.std.StdKeySerializers.Default;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginCredentials{
    private String name;
    private String password;


    public String getName()
    {
        return name;
    }

    public String getPassword()
    {
        return password;
    }

    public void setName(String newName)
    {
        name = newName;
    }

    public void setPassword(String newPassword)
    {
        password = newPassword;
    }

}