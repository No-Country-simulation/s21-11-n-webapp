package com.bakesoft.bakesoft.order.domain.port;

import com.bakesoft.bakesoft.order.domain.model.Order;
import com.bakesoft.bakesoft.order.domain.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IOrderItemRepository extends JpaRepository<OrderItem, Long> {
    List<OrderItem> findByOrder(Order order);
}