package server.User;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class UserController {
    @RequestMapping(value="/user", method=RequestMethod.GET)
    public UserDetails GETuser(String email) throws UsernameNotFoundException {
        MongoDatabase database = mongoClient.getDatabase("springsecurity");
        MongoCollection<Document> collection = database.getCollection("users");
        Document document = collection.find(Filters.eq("email",email)).first();
        if(document!=null)
        {
            String name = document.getString("name");
            String surname = document.getString("surname");
            String password = document.getString("password");
            List<String> authorities = (List<String>) document.get("authorities");
            MongoUserDetails mongoUserDetails = new MongoUserDetails(email,password,authorities.toArray(new String[authorities.size()]));
            return mongoUserDetails;
        }
        return null;
    }


}