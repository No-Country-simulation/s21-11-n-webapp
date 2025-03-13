package com.bakesoft.delivery.domain.model;

import com.bakesoft.model.EntityClass;
import com.bakesoft.order.domain.model.Order;
import com.bakesoft.user.domain.model.User;
import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Data
@Builder
@ToString(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
@Table(name = "deliveries")
public class Delivery  extends EntityClass {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "delivery_id", updatable = false, nullable = false)
    private UUID deliveryId;

    @OneToOne
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;

    private String deliveryStatus;
    private String trackingUrl;

    @ManyToOne
    @JoinColumn(name = "delivery_person_id", nullable = false)
    private User deliveryPerson;
}