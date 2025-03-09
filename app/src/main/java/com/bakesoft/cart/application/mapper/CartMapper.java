package com.bakesoft.cart.application.mapper;

import com.bakesoft.cart.application.dto.CartDto;
import com.bakesoft.cart.domain.model.Cart;
import com.bakesoft.common.mapper.EntityMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

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
                .id(entity.getId())
                .userId(entity.getUser() != null ? entity.getUser().getId() : null)
                .items(entity.getCartItems().stream()
                        .map(cartItemMapper::toDto)
                        .collect(Collectors.toList()))
                .cartStatus(entity.getCartStatus())
                .totalAmount(entity.calculateTotalAmount())
                .createdAt(entity.getCreatedAt())
                .updatedAt(entity.getUpdatedAt())
                .build();
    }

    @Override
    public Cart toEntity(CartDto dto) {
        // This method is not needed for this use case
        throw new UnsupportedOperationException("Cart entity creation from DTO is not supported");
    }
}