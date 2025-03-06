package com.bakesoft.bakesoft.cart.domain.port;

import com.bakesoft.bakesoft.cart.domain.enums.CartStatus;
import com.bakesoft.bakesoft.cart.domain.model.Cart;
import com.bakesoft.bakesoft.user.domain.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ICartRepository extends JpaRepository<Cart, Long> {
    Optional<Cart> findByUserAndStatus(User user, CartStatus cartStatus);
    List<Cart> findByUserIdAndStatus(Long userId, CartStatus cartStatus);
    Page<Cart> findByStatus(CartStatus cartStatus, Pageable pageable);
    Page<Cart> findByUserId(Long userId, Pageable pageable);
}
