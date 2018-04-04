package server.User;

import server.Login.*;

public interface UserDaoInterface {
  void register(User user);
  User validateUser(LoginCredentials login);
}
