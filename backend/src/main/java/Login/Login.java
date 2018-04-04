package jbr.springmvc.model;
import java.util.Random;


public class Login {
   private String username;
   private String password;
   
   public String getUsername() {
      return username;
    }
   
   public void setUsername(String username) {
      this.username = username;
   }

   public String getPassword() {
      return password;
   }
   
   public void setPassword(String password) {
      this.password = password;
   }

   public void resetPassword()
   {
      Random rand = new Random();
      int newPassword = rand.nextInt(89999999) + 10000000;
      setPassword(newPassword);
   }
}
