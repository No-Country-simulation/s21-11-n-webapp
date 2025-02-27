package com.bakesoft.bakesoft.user.domain.port;

import com.bakesoft.bakesoft.user.domain.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IUserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);

    Optional<User> findByEmail(String email);

    @Query("SELECT u FROM User u JOIN FETCH u.userFullData WHERE u.username = :username")
    Optional<User> findByUsernameWithFullData(@Param("username") String username);
}