package com.bakesoft.order.domain.model;

import com.bakesoft.model.EntityClass;
        import com.bakesoft.product.domain.model.Product;
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
@Table(name = "orders_products_relation")
public class OrderItem extends EntityClass {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "order_item_id", updatable = false, nullable = false)
    private UUID orderItemId;

    @ManyToOne
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(name = "quantity", nullable = false)
    private Integer quantity = 1;

    @Column(name = "price_at_purchase", nullable = false)
    private Double priceAtPurchase;
}
