package com.bakesoft.bakesoft.cart.application.service;

import com.bakesoft.bakesoft.cart.application.dto.CartDto;
import com.bakesoft.bakesoft.cart.application.dto.CartItemRequest;
import com.bakesoft.bakesoft.cart.application.mapper.CartMapper;
import com.bakesoft.bakesoft.cart.domain.enums.CartStatus;
import com.bakesoft.bakesoft.cart.domain.model.Cart;
import com.bakesoft.bakesoft.cart.domain.model.CartItem;
import com.bakesoft.bakesoft.cart.domain.port.ICartItemRepository;
import com.bakesoft.bakesoft.cart.domain.port.ICartRepository;
import com.bakesoft.bakesoft.common.dto.PageResponse;
import com.bakesoft.bakesoft.product.domain.model.Product;
import com.bakesoft.bakesoft.product.domain.port.IProductRepository;
import com.bakesoft.bakesoft.user.domain.model.User;
import com.bakesoft.bakesoft.user.domain.port.IUserRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CartService {

    private final ICartRepository cartRepository;
    private final ICartItemRepository cartItemRepository;
    private final IProductRepository productRepository;
    private final IUserRepository userRepository;
    private final CartMapper cartMapper;

    public CartDto getActiveCartByUserId(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        Cart cart = cartRepository.findByUserAndStatus(user, CartStatus.ACTIVE)
                .orElseGet(() -> createNewCart(user));

        return cartMapper.toDto(cart);
    }

    public PageResponse<CartDto> getUserCarts(Long userId, Pageable pageable) {
        Page<Cart> cartPage = cartRepository.findByUserId(userId, pageable);
        Page<CartDto> responsePage = cartMapper.toDtoPage(cartPage);
        return PageResponse.of(responsePage);
    }

    public PageResponse<CartDto> getCartsByStatus(CartStatus cartStatus, Pageable pageable) {
        Page<Cart> cartPage = cartRepository.findByStatus(cartStatus, pageable);
        Page<CartDto> responsePage = cartMapper.toDtoPage(cartPage);
        return PageResponse.of(responsePage);
    }

    @Transactional
    public CartDto addItemToCart(Long userId, CartItemRequest request) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        Product product = productRepository.findByIdAndIsActiveTrue(request.getProductId())
                .orElseThrow(() -> new EntityNotFoundException("Product not found or inactive"));

        if (product.getCurrentStock() < request.getQuantity()) {
            throw new IllegalArgumentException("Not enough stock available");
        }

        Cart cart = cartRepository.findByUserAndStatus(user, CartStatus.ACTIVE)
                .orElseGet(() -> createNewCart(user));

        Optional<CartItem> existingItem = cartItemRepository.findByCartAndProduct(cart, product);

        if (existingItem.isPresent()) {
            CartItem item = existingItem.get();
            item.setQuantity(item.getQuantity() + request.getQuantity());
            cartItemRepository.save(item);
        } else {
            CartItem newItem = CartItem.builder()
                    .cart(cart)
                    .product(product)
                    .quantity(request.getQuantity())
                    .build();
            cart.addProduct(newItem);
            cartRepository.save(cart);
        }

        return cartMapper.toDto(cart);
    }

    @Transactional
    public CartDto updateCartItem(Long userId, Long itemId, CartItemRequest request) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        Cart cart = cartRepository.findByUserAndStatus(user, CartStatus.ACTIVE)
                .orElseThrow(() -> new EntityNotFoundException("Active cart not found"));

        CartItem item = cartItemRepository.findById(itemId)
                .orElseThrow(() -> new EntityNotFoundException("Cart item not found"));

        if (!item.getCart().getId().equals(cart.getId())) {
            throw new IllegalArgumentException("Item does not belong to user's cart");
        }

        if (request.getQuantity() <= 0) {
            cart.removeProduct(item);
            cartItemRepository.delete(item);
        } else {
            Product product = item.getProduct();
            if (product.getCurrentStock() < request.getQuantity()) {
                throw new IllegalArgumentException("Not enough stock available");
            }
            item.setQuantity(request.getQuantity());
            cartItemRepository.save(item);
        }

        return cartMapper.toDto(cart);
    }

    @Transactional
    public void removeItemFromCart(Long userId, Long itemId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        Cart cart = cartRepository.findByUserAndStatus(user, CartStatus.ACTIVE)
                .orElseThrow(() -> new EntityNotFoundException("Active cart not found"));

        CartItem item = cartItemRepository.findById(itemId)
                .orElseThrow(() -> new EntityNotFoundException("Cart item not found"));

        if (!item.getCart().getId().equals(cart.getId())) {
            throw new IllegalArgumentException("Item does not belong to user's cart");
        }

        cart.removeProduct(item);
        cartItemRepository.delete(item);
    }

    @Transactional
    public void clearCart(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        Cart cart = cartRepository.findByUserAndStatus(user, CartStatus.ACTIVE)
                .orElseThrow(() -> new EntityNotFoundException("Active cart not found"));

        cart.getCartItems().clear();
        cartRepository.save(cart);
    }

    @Transactional
    public Cart markCartAsExecuted(Long cartId) {
        Cart cart = cartRepository.findById(cartId)
                .orElseThrow(() -> new EntityNotFoundException("Cart not found"));

        cart.setCartStatus(CartStatus.EXECUTED);
        return cartRepository.save(cart);
    }

    private Cart createNewCart(User user) {
        Cart newCart = Cart.builder()
                .user(user)
                .cartStatus(CartStatus.ACTIVE)
                .build();
        return cartRepository.save(newCart);
    }
}

