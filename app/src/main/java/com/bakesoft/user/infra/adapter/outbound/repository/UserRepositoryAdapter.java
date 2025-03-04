package com.bakesoft.user.infra.adapter.outbound.repository;

import com.bakesoft.user.domain.model.User;
import com.bakesoft.user.domain.port.IUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
@RequiredArgsConstructor
public class UserRepositoryAdapter implements IUserRepository {
    private final UserJpaRepository jpaRepository;

    @Override
    public Optional<User> findUserByEmail(String email) {
        return jpaRepository.findByEmail(email);
    }

    @Override
    public Optional<User> findByResetPasswordToken(String resetPasswordToken) {
        return jpaRepository.findByResetPasswordToken(resetPasswordToken);
    }

    @Override
    public void save(User newUser) {
        jpaRepository.save(newUser);
    }
}

