package server.User;

import server.Login.*;

public interface UserDao {
  void register(User user);
  User validateUser(Login login);
}
