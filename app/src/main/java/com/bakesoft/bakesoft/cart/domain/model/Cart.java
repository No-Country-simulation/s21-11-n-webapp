package com.bakesoft.bakesoft.cart.domain.model;

import com.bakesoft.bakesoft.cart.domain.enums.Status;
import com.bakesoft.bakesoft.entity.domain.model.EntityClass;
import com.bakesoft.bakesoft.product.domain.model.Product;
import com.bakesoft.bakesoft.user.domain.enums.Country;
import com.bakesoft.bakesoft.user.domain.model.User;
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
@Table(name = "carts")
public class Cart extends EntityClass {
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToMany
    @JoinTable(
            name = "carts_products_relation",
            joinColumns = @JoinColumn(name = "cart_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id")
    )
    private Set<Product> products;

    @Column(name = "cart_status", nullable = false, length = 9)
    private Status status = Status.ACTIVE;
}