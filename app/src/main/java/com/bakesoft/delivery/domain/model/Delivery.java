package com.bakesoft.delivery.domain.model;

import com.bakesoft.model.EntityClass;
import com.bakesoft.order.domain.model.Order;
import com.bakesoft.user.domain.model.User;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Builder
@ToString(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Table(name = "deliveries")
public class Delivery  extends EntityClass {
    @OneToOne
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;

    private String deliveryStatus;
    private String trackingUrl;

    @ManyToOne
    @JoinColumn(name = "delivery_person_id", nullable = false)
    private User deliveryPerson;
}