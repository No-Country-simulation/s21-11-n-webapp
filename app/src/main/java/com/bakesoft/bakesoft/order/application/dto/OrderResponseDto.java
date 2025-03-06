package com.bakesoft.bakesoft.order.application.dto;
import com.bakesoft.bakesoft.order.domain.enums.OrderStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderResponseDto {
    private Long id;
    private Long userId;
    private List<OrderItemDto> items;
    private Double totalAmount;
    private String deliveryAddress;
    private OrderStatus orderStatus;
    private LocalDateTime createdAt;
}