package com.bakesoft.cart.application.dto;

import com.bakesoft.cart.domain.enums.CartStatus;
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
public class CartDto {
    private UUID id;
    private UUID userId;
    private List<CartItemDto> items;
    private CartStatus cartStatus;
    private Double totalAmount;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}

