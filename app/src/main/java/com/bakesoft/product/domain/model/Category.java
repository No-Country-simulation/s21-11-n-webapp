package com.bakesoft.product.domain.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;
import java.util.UUID;

@Data
@Entity
@Table(name = "categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String name;
    private String description;
    private String thumbnail;
    private Boolean isActive;

    @ManyToMany(mappedBy = "categories")
    @JsonBackReference
    private Set<Product> products;
}