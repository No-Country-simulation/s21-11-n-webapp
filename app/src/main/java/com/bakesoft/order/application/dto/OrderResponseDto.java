package com.bakesoft.order.application.dto;
import com.bakesoft.order.domain.enums.OrderStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderResponseDto {
    private UUID id;
    private UUID userId;
    private List<OrderItemDto> items;
    private Double totalAmount;
    private String deliveryAddress;
    private OrderStatus orderStatus;
    private LocalDateTime createdAt;
}