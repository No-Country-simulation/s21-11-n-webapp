package com.bakesoft.bakesoft.payment.domain.model;

import com.bakesoft.bakesoft.entity.domain.model.EntityClass;
import com.bakesoft.bakesoft.order.domain.model.Order;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.*;

import java.util.Date;

@Entity
@Data
@Builder
@ToString(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Table(name = "payments")
public class Payment extends EntityClass {
    private String paymentMethod;
    private String providerTransactionId;
    private Double totalAmount;
    private String status;
    private Date paymentDate;

    @OneToOne
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;
}