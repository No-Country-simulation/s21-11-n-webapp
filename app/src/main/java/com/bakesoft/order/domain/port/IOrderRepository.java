package com.bakesoft.order.domain.port;
import com.bakesoft.order.domain.enums.OrderStatus;
import com.bakesoft.order.domain.model.Order;
import com.bakesoft.bakesoft.user.domain.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IOrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUser(User user);
    Page<Order> findByUser(User user, Pageable pageable);
    Page<Order> findByUserAndStatus(User user, OrderStatus orderStatus, Pageable pageable);
    Page<Order> findByStatus(OrderStatus orderStatus, Pageable pageable);
}

