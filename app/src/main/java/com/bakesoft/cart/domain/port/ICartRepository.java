package com.bakesoft.cart.domain.port;

import com.bakesoft.cart.domain.enums.CartStatus;
import com.bakesoft.cart.domain.model.Cart;
import com.bakesoft.user.domain.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface ICartRepository extends JpaRepository<Cart, UUID> {
    Optional<Cart> findByUserAndCartStatus(User user, CartStatus cartStatus);
    List<Cart> findByUserUserIdAndCartStatus(UUID userId, CartStatus cartStatus);
    Page<Cart> findByCartStatus(CartStatus cartStatus, Pageable pageable);
    Page<Cart> findByUserUserId(UUID userId, Pageable pageable);
}
