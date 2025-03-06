package com.bakesoft.bakesoft.order.application.dto.mappers;

import com.bakesoft.bakesoft.common.mapper.EntityMapper;
import com.bakesoft.bakesoft.order.application.dto.OrderItemDto;
import com.bakesoft.bakesoft.order.domain.model.OrderItem;
import org.springframework.stereotype.Component;

@Component
public class OrderItemMapper implements EntityMapper<OrderItem, OrderItemDto> {

    @Override
    public OrderItemDto toDto(OrderItem entity) {
        if (entity == null) {
            return null;
        }

        return OrderItemDto.builder()
                .id(entity.getId())
                .productId(entity.getProduct().getId())
                .productName(entity.getProduct().getName())
                .productImage(entity.getProduct().getCoverPicture())
                .priceAtPurchase(entity.getPriceAtPurchase())
                .quantity(entity.getQuantity())
                .subtotal(entity.getPriceAtPurchase() * entity.getQuantity())
                .build();
    }

    @Override
    public OrderItem toEntity(OrderItemDto dto) {
        // This method is not needed for this use case
        throw new UnsupportedOperationException("OrderItem entity creation from DTO is not supported");
    }
}
