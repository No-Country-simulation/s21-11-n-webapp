package com.bakesoft.auth.domain.port;

import com.bakesoft.auth.domain.model.Role;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;


public interface IRoleRepository {
    @Query(value = "SELECT r from  Role r where r.name = :name")
    Optional<Role> findRoleByName(@Param("name") String name);

    Optional<Role> findByName(String admin);

    void save(Role role);

    boolean existsByName(String roleName);
}
