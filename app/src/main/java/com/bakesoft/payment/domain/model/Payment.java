package com.bakesoft.payment.domain.model;

import com.bakesoft.model.EntityClass;
import com.bakesoft.order.domain.model.Order;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.UUID;

@Entity
@Data
@Builder
@ToString(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
@Table(name = "payments")
public class Payment extends EntityClass {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "payment_id", updatable = false, nullable = false)
    private UUID paymentId;

    private String paymentMethod;
    private String providerTransactionId;
    private Double totalAmount;
    private String status;
    private Date paymentDate;

    @OneToOne
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;
}