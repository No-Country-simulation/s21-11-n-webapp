package com.bakesoft.bakesoft.product.domain.model;

import com.bakesoft.bakesoft.entity.domain.model.EntityClass;
import com.bakesoft.bakesoft.review.domain.model.Review;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Entity
@Data
@Builder
@ToString(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Table(name = "products")
public class Product extends EntityClass {
    private String name;
    private String coverPicture;
    private String description;
    private Double price;
    private Integer currentStock;
    private Integer totalRating;
    private Integer totalFavorites;
    private Boolean inOffer;
    private Double offerPercentageDiscount;

    @ManyToMany
    @JoinTable(
            name = "products_categories_relation",
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id")
    )
    private Set<Category> categories;

    @OneToMany(mappedBy = "product")
    private Set<Review> reviews;
}
