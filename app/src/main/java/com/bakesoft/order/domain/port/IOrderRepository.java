package com.bakesoft.order.domain.port;
import com.bakesoft.order.domain.enums.OrderStatus;
import com.bakesoft.order.domain.model.Order;
import com.bakesoft.user.domain.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface IOrderRepository extends JpaRepository<Order, UUID> {
    List<Order> findByUser(User user);
    Page<Order> findByUser(User user, Pageable pageable);
    Page<Order> findByUserAndOrderStatus(User user, OrderStatus orderStatus, Pageable pageable);
    Page<Order> findByOrderStatus(OrderStatus orderStatus, Pageable pageable);
    Page<Order> findByUserUserId(UUID userId, Pageable pageable);
}