package server.User;
import java.util.Random;

public class User {
  private String username;
  private String password;
  private String firstname;
  private String lastname;
  private String email;
  private String address;
  private int phone;
  private boolean publicVisibility = true;

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

  public String getFirstname() {
    return firstname;
  }

  public void setFirstname(String firstname) {
    this.firstname = firstname;
  }

  public String getLastname() {
    return lastname;
  }

  public void setLastname(String lastname) {
    this.lastname = lastname;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public void resetPassword()
  {
    Random rand = new Random();
    int newPassword = rand.nextInt(89999999) + 10000000;
    // setPassword(newPassword.toString());
  }

  public boolean getVisibility() {
    return this.publicVisibility;
  }

  public void setVisibility (boolean publicVisibility) {
    this.publicVisibility = publicVisibility;
  }
}
