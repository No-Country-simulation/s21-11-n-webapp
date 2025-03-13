package com.bakesoft.cart.application.mapper;

import com.bakesoft.cart.application.dto.CartDto;
import com.bakesoft.cart.domain.model.Cart;
import com.bakesoft.common.mapper.EntityMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.stream.Collectors;

/**
 * Mapper for converting Cart entity to CartDto.
 */
@Component
@RequiredArgsConstructor
public class CartMapper implements EntityMapper<Cart, CartDto> {

    private final CartItemMapper cartItemMapper;

    @Override
    public CartDto toDto(Cart entity) {
        if (entity == null) {
            return null;
        }

        return CartDto.builder()
                .id(entity.getCartId())
                .userId(entity.getUser() != null ? entity.getUser().getUserId() : null)
                .items(entity.getCartItems() != null
                        ? entity.getCartItems().stream()
                        .map(cartItemMapper::toDto)
                        .collect(Collectors.toList())
                        : Collections.emptyList())
                .cartStatus(entity.getCartStatus())
                .totalAmount(entity.calculateTotalAmount()) // Considerar almacenar el total en BD si es costoso calcularlo
                .createdAt(entity.getCreatedAt())
                .updatedAt(entity.getUpdatedAt())
                .build();
    }

    @Override
    public Cart toEntity(CartDto dto) {
        throw new UnsupportedOperationException("Cart entity creation from DTO is not supported");
    }
}
