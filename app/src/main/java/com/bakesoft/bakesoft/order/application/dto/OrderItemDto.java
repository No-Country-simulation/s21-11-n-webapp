package com.bakesoft.bakesoft.order.application.dto;
import lombok.AllArgsConstructor;
        import lombok.Builder;
        import lombok.Data;
        import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderItemDto {
    private Long id;
    private Long productId;
    private String productName;
    private String productImage;
    private Double priceAtPurchase;
    private Integer quantity;
    private Double subtotal;
}