package com.backend.dao;

import com.backend.model.Login;
import com.backend.model.User;

public interface UserDao {
  void register(User user);
  User validateUser(Login login);
}