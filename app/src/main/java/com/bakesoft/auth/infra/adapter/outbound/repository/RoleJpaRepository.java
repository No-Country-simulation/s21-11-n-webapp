package com.bakesoft.auth.infra.adapter.outbound.repository;

import com.bakesoft.auth.domain.model.Role;
import com.bakesoft.auth.domain.port.IRoleRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface RoleJpaRepository extends JpaRepository<Role, UUID> {
    @Query(value = "SELECT r from  Role r where r.name = :name")
    Optional<Role> findRoleByName(@Param("name") String name);

    Optional<Role> findByName(String admin);

    boolean existsByName(String roleName);
}
