package server.Security.Config;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
/**
 * Created by gkatzioura on 9/27/16.
 */
@Configuration
@Profile({"customuserdetails","encodedcustompassword"})
public class MongoConfiguration {
    @Bean
    public MongoClient createConnection() {
        //You should put your mongo ip here
        return new MongoClient("imagecluster-shard-00-00-fqcbl.mongodb.net:27017");
    }
}