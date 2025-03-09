package com.bakesoft.cart.domain.model;

import com.bakesoft.cart.domain.enums.CartStatus;
import com.bakesoft.model.EntityClass;
import com.bakesoft.bakesoft.user.domain.model.User;
import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
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

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<CartItem> cartItems = new HashSet<>();

    @Column(name = "cart_status", nullable = false, length = 9)
    private CartStatus cartStatus = CartStatus.ACTIVE;

    // Helper method to add a product with quantity
    public void addProduct(CartItem cartItem) {
        cartItems.add(cartItem);
        cartItem.setCart(this);
    }

    // Helper method to remove a product
    public void removeProduct(CartItem cartItem) {
        cartItems.remove(cartItem);
        cartItem.setCart(null);
    }

    // Calculate total amount
    public Double calculateTotalAmount() {
        return cartItems.stream()
                .mapToDouble(item -> item.getProduct().getPrice() * item.getQuantity())
                .sum();
    }
}