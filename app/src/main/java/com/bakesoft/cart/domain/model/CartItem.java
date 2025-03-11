package com.bakesoft.cart.domain.model;

import com.bakesoft.model.EntityClass;
import com.bakesoft.product.domain.model.Product;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Builder
@ToString(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Table(name = "carts_products_relation")
public class CartItem extends EntityClass {

    @ManyToOne
    @JoinColumn(name = "cart_id", nullable = false)
    private Cart cart;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(name = "quantity", nullable = false)
    private Integer quantity = 1;
}

