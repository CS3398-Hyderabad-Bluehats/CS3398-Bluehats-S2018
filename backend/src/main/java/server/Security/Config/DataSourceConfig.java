package server.Security.Config;

//import org.h2.jdbcx.JdbcDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import javax.sql.DataSource;
import java.nio.file.Files;

@Configuration
public class DataSourceConfig {

    // @Bean
    // @Profile(value = {"simple","customquery","encodedjdbcpassword"})
    // public DataSource createDataSource() {

    //     JdbcDataSource dataSource = new JdbcDataSource();
    //     dataSource.setURL("jdbc:h2:"+System.getProperty("java.io.tmpdir")+"/database");

    //     return dataSource;
    // }

}