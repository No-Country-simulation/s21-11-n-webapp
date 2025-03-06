package com.bakesoft.bakesoft.cart.domain.port;

import com.bakesoft.bakesoft.cart.domain.model.Cart;
import com.bakesoft.bakesoft.cart.domain.model.CartItem;
import com.bakesoft.bakesoft.product.domain.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ICartItemRepository extends JpaRepository<CartItem, Long> {
    Optional<CartItem> findByCartAndProduct(Cart cart, Product product);
    void deleteByCartAndProduct(Cart cart, Product product);
}