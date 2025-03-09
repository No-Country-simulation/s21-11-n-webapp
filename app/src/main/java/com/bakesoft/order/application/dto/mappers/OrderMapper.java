package com.bakesoft.order.application.dto.mappers;

import com.bakesoft.common.mapper.EntityMapper;
import com.bakesoft.order.application.dto.OrderResponseDto;
import com.bakesoft.order.domain.model.Order;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class OrderMapper implements EntityMapper<Order, OrderResponseDto> {

    private final OrderItemMapper orderItemMapper;

    @Override
    public OrderResponseDto toDto(Order entity) {
        if (entity == null) {
            return null;
        }

        return OrderResponseDto.builder()
                .id(entity.getId())
                .userId(entity.getUser() != null ? entity.getUser().getId() : null)
                .items(entity.getOrderItems().stream()
                        .map(orderItemMapper::toDto)
                        .collect(Collectors.toList()))
                .totalAmount(entity.getTotalAmount())
                .deliveryAddress(entity.getDeliveryAddress())
                .orderStatus(entity.getOrderStatus())
                .createdAt(entity.getCreatedAt())
                .build();
    }

    @Override
    public Order toEntity(OrderResponseDto dto) {
        // This method is not needed for this use case
        throw new UnsupportedOperationException("Order entity creation from DTO is not supported");
    }
}