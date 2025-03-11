package com.bakesoft.order.web.controller;

import com.bakesoft.common.dto.PageResponse;
import com.bakesoft.order.application.dto.OrderRequestDto;
import com.bakesoft.order.application.dto.OrderResponseDto;
import com.bakesoft.order.application.service.OrderService;
import com.bakesoft.order.domain.enums.OrderStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping("/user/{userId}")
    public ResponseEntity<OrderResponseDto> createOrder(
            @PathVariable UUID userId,
            @RequestBody OrderRequestDto orderRequest) {
        OrderResponseDto newOrder = orderService.createOrderFromCart(userId, orderRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(newOrder);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<PageResponse<OrderResponseDto>> getUserOrders(
            @PathVariable UUID userId,
            @PageableDefault(size = 10, sort = "createdAt") Pageable pageable) {
        PageResponse<OrderResponseDto> orders = orderService.getUserOrders(userId, pageable);
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/status/{status}")
    public ResponseEntity<PageResponse<OrderResponseDto>> getOrdersByStatus(
            @PathVariable OrderStatus status,
            @PageableDefault(size = 10, sort = "createdAt") Pageable pageable) {
        PageResponse<OrderResponseDto> orders = orderService.getOrdersByStatus(status, pageable);
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/{orderId}")
    public ResponseEntity<OrderResponseDto> getOrderById(@PathVariable Long orderId) {
        OrderResponseDto order = orderService.getOrderById(orderId);
        return ResponseEntity.ok(order);
    }

    @PatchMapping("/{orderId}/status")
    public ResponseEntity<OrderResponseDto> updateOrderStatus(
            @PathVariable Long orderId,
            @RequestParam OrderStatus status) {
        OrderResponseDto updatedOrder = orderService.updateOrderStatus(orderId, status);
        return ResponseEntity.ok(updatedOrder);
    }
}

