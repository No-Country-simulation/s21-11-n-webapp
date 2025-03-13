package com.bakesoft.product.domain.port;

import com.bakesoft.product.domain.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ICategoryRepository extends JpaRepository<Category, UUID> {
    List<Category> findByIsActiveTrue();
    Page<Category> findByIsActiveTrue(Pageable pageable);
    Page<Category> findByNameContainingIgnoreCase(String name, Pageable pageable);
    Optional<Category> findByIdAndIsActiveTrue(UUID id);
}


