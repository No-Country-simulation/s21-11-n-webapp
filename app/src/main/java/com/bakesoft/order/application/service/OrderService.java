package com.bakesoft.order.application.service;
import com.bakesoft.cart.application.service.CartService;

import com.bakesoft.cart.domain.model.Cart;
import com.bakesoft.cart.domain.model.CartItem;
import com.bakesoft.common.dto.PageResponse;
import com.bakesoft.order.application.dto.OrderRequestDto;
import com.bakesoft.order.application.dto.OrderResponseDto;
import com.bakesoft.order.application.dto.mappers.OrderMapper;
import com.bakesoft.order.domain.model.Order;
import com.bakesoft.order.domain.model.OrderItem;
import com.bakesoft.order.domain.port.IOrderItemRepository;
import com.bakesoft.order.domain.port.IOrderRepository;
import com.bakesoft.order.domain.enums.OrderStatus;


import com.bakesoft.product.domain.model.Product;
import com.bakesoft.product.domain.port.IProductRepository;
import com.bakesoft.user.domain.model.User;
import com.bakesoft.user.domain.port.IUserRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final IOrderRepository orderRepository;
    private final IOrderItemRepository orderItemRepository;
    private final CartService cartService;
    private final IUserRepository userRepository;
    private final IProductRepository productRepository;
    //private final PaymentRepository paymentRepository;
    //private final DeliveryRepository deliveryRepository;
    private final OrderMapper orderMapper;

    @Transactional
    public OrderResponseDto createOrderFromCart(UUID userId, OrderRequestDto orderRequest) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        Cart cart = cartService.markCartAsExecuted(orderRequest.getCartId());

        if (cart.getCartItems().isEmpty()) {
            throw new IllegalArgumentException("Cannot create order from empty cart");
        }

        // Create a new payment
        //Payment payment = new Payment();
        //payment = paymentRepository.save(payment);

        // Create the order
        Order order = Order.builder()
                .user(user)
                .deliveryAddress(orderRequest.getDeliveryAddress())
                .orderStatus(OrderStatus.PENDING_PAYMENT)
                //.payment(payment)
                //.delivery(delivery)
                .build();

        order = orderRepository.save(order);

        // Create order items from cart items
        for (CartItem cartItem : cart.getCartItems()) {
            Product product = cartItem.getProduct();

            // Check stock availability
            if (product.getCurrentStock() < cartItem.getQuantity()) {
                throw new IllegalArgumentException("Not enough stock for product: " + product.getName());
            }

            // Create order item
            OrderItem orderItem = OrderItem.builder()
                    .order(order)
                    .product(product)
                    .quantity(cartItem.getQuantity())
                    .priceAtPurchase(product.getPrice())
                    .build();

            order.addOrderItem(orderItem);

            // Update product stock
            product.setCurrentStock(product.getCurrentStock() - cartItem.getQuantity());
            productRepository.save(product);
        }

        // Calculate and set total amount
        order.calculateTotalAmount();
        order = orderRepository.save(order);

        return orderMapper.toDto(order);
    }

    public PageResponse<OrderResponseDto> getUserOrders(UUID userId, Pageable pageable) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        Page<Order> orderPage = orderRepository.findByUser(user, pageable);
        Page<OrderResponseDto> responsePage = orderMapper.toDtoPage(orderPage);
        return PageResponse.of(responsePage);
    }

    public PageResponse<OrderResponseDto> getOrdersByStatus(OrderStatus status, Pageable pageable) {
        Page<Order> orderPage = orderRepository.findByOrderStatus(status, pageable);
        Page<OrderResponseDto> responsePage = orderMapper.toDtoPage(orderPage);
        return PageResponse.of(responsePage);
    }

    public OrderResponseDto getOrderById(UUID orderId) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new EntityNotFoundException("Order not found"));

        return orderMapper.toDto(order);
    }

    @Transactional
    public OrderResponseDto updateOrderStatus(UUID orderId, OrderStatus newOrderStatus) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new EntityNotFoundException("Order not found"));

        order.setOrderStatus(newOrderStatus);
        order = orderRepository.save(order);

        return orderMapper.toDto(order);
    }
}

