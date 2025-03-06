package com.bakesoft.bakesoft.product.domain.port;

import com.bakesoft.bakesoft.product.domain.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICategoryRepository extends JpaRepository<Category, Integer> {
    List<Category> findByIsActiveTrue();
}


