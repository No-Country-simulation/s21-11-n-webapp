package com.bakesoft.order.domain.model;

import com.bakesoft.delivery.domain.model.Delivery;
import com.bakesoft.model.EntityClass;
import com.bakesoft.order.domain.enums.OrderStatus;
import com.bakesoft.payment.domain.model.Payment;
import com.bakesoft.user.domain.model.User;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Data
@Builder
@ToString(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
@Table(name = "orders")
public class Order extends EntityClass {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "order_id", updatable = false, nullable = false)
    private UUID orderId;

    private Double totalAmount;
    private String deliveryAddress;

    @Column(name = "orderStatus", length = 15)
    private OrderStatus orderStatus = OrderStatus.PENDING_PAYMENT;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<OrderItem> orderItems = new HashSet<>();

    @OneToOne
    @JoinColumn(name = "payment_id", referencedColumnName = "payment_id", nullable = false)
    @JsonManagedReference
    @ToString.Exclude
    private Payment payment;

    //@OneToOne
    //@JoinColumn(name = "delivery_id", referencedColumnName = "delivery_id", nullable = false)
    //@JsonManagedReference
    //@ToString.Exclude
    //private Delivery delivery;

    // Helper method to add a product with quantity
    public void addOrderItem(OrderItem orderItem) {
        orderItems.add(orderItem);
        orderItem.setOrder(this);
    }

    // Helper method to remove a product
    public void removeOrderItem(OrderItem orderItem) {
        orderItems.remove(orderItem);
        orderItem.setOrder(null);
    }

    // Calculate total amount
    public void calculateTotalAmount() {
        this.totalAmount = orderItems.stream()
                .mapToDouble(item -> item.getPriceAtPurchase() * item.getQuantity())
                .sum();
    }
}