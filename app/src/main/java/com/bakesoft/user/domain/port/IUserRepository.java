package com.bakesoft.user.domain.port;

import com.bakesoft.user.domain.model.User;

import java.util.Optional;

public interface IUserRepository {
    Optional<User> findUserByEmail(String email);
    Optional<User> findByResetPasswordToken(String resetPasswordToken);
    void save(User newUser);
}
