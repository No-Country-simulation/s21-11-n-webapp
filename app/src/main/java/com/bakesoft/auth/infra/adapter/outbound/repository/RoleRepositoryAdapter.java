package com.bakesoft.auth.infra.adapter.outbound.repository;

import com.bakesoft.auth.domain.model.Role;
import com.bakesoft.auth.domain.port.IRoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
@RequiredArgsConstructor
public class RoleRepositoryAdapter implements IRoleRepository {

    private final RoleJpaRepository jpaRoleRepository; // Inyecta el repositorio JPA

    @Override
    public Optional<Role> findRoleByName(String name) {
        return jpaRoleRepository.findByName(name); // Delega la operación al repositorio JPA
    }

    @Override
    public Optional<Role> findByName(String name) {
        return jpaRoleRepository.findByName(name); // Delega la operación al repositorio JPA
    }

    @Override
    public void save(Role role) {
        jpaRoleRepository.save(role); // Delega la operación al repositorio JPA
    }

    @Override
    public boolean existsByName(String roleName) {
        return jpaRoleRepository.existsByName(roleName); // Delega la operación al repositorio JPA
    }
}