package com.bakesoft.bakesoft.order.domain.model;

import com.bakesoft.bakesoft.delivery.domain.model.Delivery;
import com.bakesoft.bakesoft.entity.domain.model.EntityClass;
import com.bakesoft.bakesoft.order.domain.enums.Status;
import com.bakesoft.bakesoft.payment.domain.model.Payment;
import com.bakesoft.bakesoft.product.domain.model.Product;
import com.bakesoft.bakesoft.user.domain.enums.Country;
import com.bakesoft.bakesoft.user.domain.model.User;
import com.bakesoft.bakesoft.user.domain.model.UserFullData;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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
@Table(name = "orders")
public class Order extends EntityClass {

    private Double totalAmount;
    private String deliveryAddress;

    @Column(name = "status", length = 15)
    private Status status = Status.PENDING_PAYMENT;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToMany
    @JoinTable(
            name = "orders_products_relation",
            joinColumns = @JoinColumn(name = "order_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id")
    )
    private Set<Product> products;

    @OneToOne
    @JoinColumn(name = "payment_id", referencedColumnName = "id", nullable = false)
    @JsonManagedReference
    @ToString.Exclude
    private Payment payment;

    @OneToOne
    @JoinColumn(name = "delivery_id", referencedColumnName = "id", nullable = false)
    @JsonManagedReference
    @ToString.Exclude
    private Delivery delivery;
}