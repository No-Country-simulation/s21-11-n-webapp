package com.bakesoft.cart.web.controller;

import com.bakesoft.cart.application.dto.CartDto;
import com.bakesoft.cart.application.dto.CartItemRequest;
import com.bakesoft.cart.application.service.CartService;
import com.bakesoft.cart.domain.enums.CartStatus;
import com.bakesoft.common.dto.PageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/carts")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    @GetMapping("/user/{userId}")
    public ResponseEntity<CartDto> getUserActiveCart(@PathVariable UUID userId) {
        CartDto cart = cartService.getActiveCartByUserId(userId);
        return ResponseEntity.ok(cart);
    }

    @GetMapping("/user/{userId}/all")
    public ResponseEntity<PageResponse<CartDto>> getUserCarts(
            @PathVariable Long userId,
            @PageableDefault(size = 10, sort = "createdAt") Pageable pageable) {
        return ResponseEntity.ok(cartService.getUserCarts(userId, pageable));
    }

    @GetMapping("/orderStatus/{orderStatus}")
    public ResponseEntity<PageResponse<CartDto>> getCartsByStatus(
            @PathVariable CartStatus cartStatus,
            @PageableDefault(size = 10, sort = "createdAt") Pageable pageable) {
        return ResponseEntity.ok(cartService.getCartsByStatus(cartStatus, pageable));
    }

    @PostMapping("/user/{userId}/items")
    public ResponseEntity<CartDto> addItemToCart(
            @PathVariable UUID userId,
            @RequestBody CartItemRequest request) {
        CartDto updatedCart = cartService.addItemToCart(userId, request);
        return ResponseEntity.status(HttpStatus.CREATED).body(updatedCart);
    }

    @PutMapping("/user/{userId}/items/{itemId}")
    public ResponseEntity<CartDto> updateCartItem(
            @PathVariable UUID userId,
            @PathVariable Long itemId,
            @RequestBody CartItemRequest request) {
        CartDto updatedCart = cartService.updateCartItem(userId, itemId, request);
        return ResponseEntity.ok(updatedCart);
    }

    @DeleteMapping("/user/{userId}/items/{itemId}")
    public ResponseEntity<Void> removeItemFromCart(
            @PathVariable UUID userId,
            @PathVariable Long itemId) {
        cartService.removeItemFromCart(userId, itemId);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/user/{userId}/clear")
    public ResponseEntity<Void> clearCart(@PathVariable UUID userId) {
        cartService.clearCart(userId);
        return ResponseEntity.noContent().build();
    }
}
