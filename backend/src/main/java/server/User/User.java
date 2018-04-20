package server.User;
import java.util.Random;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;

public class User {
  public String ID;
  private String username;
  private String password;
  private String firstname;
  private String lastname;

  private boolean publicVisibility = true;
  

  private List<GrantedAuthority> grantedAuthorities;
  public User(String username,String password,String[] authorities) {
      this.username = username;
      this.password = password;
      this.grantedAuthorities = AuthorityUtils.createAuthorityList(authorities);
  }
  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
      return grantedAuthorities;
  }

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
