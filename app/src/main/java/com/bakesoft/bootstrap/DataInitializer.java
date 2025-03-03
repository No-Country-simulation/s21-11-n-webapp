package com.bakesoft.bootstrap;

import com.bakesoft.auth.infra.adapter.outbound.repository.RoleRepositoryAdapter;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import com.bakesoft.auth.domain.model.Role;
import org.springframework.transaction.annotation.Transactional;


@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final RoleRepositoryAdapter roleRepository;


    @Override
    public void run(String... args) throws Exception {
        // Crear ROLE_USER si no existe
        createRoleIfNotFound("ROLE_USER");

        // Crear ROLE_ADMIN si no existe
        createRoleIfNotFound("ROLE_ADMIN");
    }

    @Transactional
    private void createRoleIfNotFound(String roleName) {
        // Verifica si el rol ya existe
        if (!roleRepository.existsByName(roleName)) {
            Role role = new Role();
            role.setName(roleName);
            roleRepository.save(role);
            System.out.println("Rol creado: " + roleName); // Opcional: para depuración
        } else {
            System.out.println("Rol ya existe: " + roleName); // Opcional: para depuración
        }
    }
}