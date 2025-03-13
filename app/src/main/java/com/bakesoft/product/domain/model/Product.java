package com.bakesoft.product.domain.model;

import com.bakesoft.model.EntityClass;
import com.bakesoft.review.domain.model.Review;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import java.util.Set;
import java.util.UUID;

@Entity
@Data
@Builder
@ToString(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
@Table(name = "products")
public class Product extends EntityClass {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "product_id", updatable = false, nullable = false)
    private UUID productId;
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
