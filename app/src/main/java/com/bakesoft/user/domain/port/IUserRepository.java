package com.bakesoft.user.domain.port;

import com.bakesoft.user.domain.model.User;

import java.util.Optional;
import java.util.UUID;

public interface IUserRepository {
    Optional<User> findUserByEmail(String email);
    Optional<User> findByResetPasswordToken(String resetPasswordToken);
    void save(User newUser);
    Optional<User> findById(UUID userId);
}
