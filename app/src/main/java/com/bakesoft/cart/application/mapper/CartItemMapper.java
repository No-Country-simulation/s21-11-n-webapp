package com.bakesoft.cart.application.mapper;

import com.bakesoft.cart.application.dto.CartItemDto;
import com.bakesoft.cart.domain.model.CartItem;
import com.bakesoft.common.mapper.EntityMapper;
import org.springframework.stereotype.Component;

@Component
public class CartItemMapper implements EntityMapper<CartItem, CartItemDto> {

    @Override
    public CartItemDto toDto(CartItem entity) {
        if (entity == null) {
            return null;
        }

        return CartItemDto.builder()
                .id(entity.getId())
                .productId(entity.getProduct().getId())
                .productName(entity.getProduct().getName())
                .productImage(entity.getProduct().getCoverPicture())
                .productPrice(entity.getProduct().getPrice())
                .quantity(entity.getQuantity())
                .subtotal(entity.getProduct().getPrice() * entity.getQuantity())
                .build();
    }

    @Override
    public CartItem toEntity(CartItemDto dto) {
        // This method is not needed for this use case
        throw new UnsupportedOperationException("CartItem entity creation from DTO is not supported");
    }
}