package com.bakesoft.bakesoft.product.web.controller;

import com.bakesoft.bakesoft.common.dto.PageResponse;
import com.bakesoft.bakesoft.product.application.dto.ProductDto;
import com.bakesoft.bakesoft.product.application.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping
    public ResponseEntity<PageResponse<ProductDto>> getAllProducts(
            @PageableDefault(size = 20, sort = "id") Pageable pageable) {
        return ResponseEntity.ok(productService.getAllProducts(pageable));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductDto> getProductById(@PathVariable Long id) {
        return ResponseEntity.ok(productService.getProductById(id));
    }

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<PageResponse<ProductDto>> getProductsByCategory(
            @PathVariable Integer categoryId,
            @PageableDefault(size = 20, sort = "id") Pageable pageable) {
        return ResponseEntity.ok(productService.getProductsByCategory(categoryId, pageable));
    }

    @GetMapping("/offers")
    public ResponseEntity<PageResponse<ProductDto>> getProductsOnOffer(
            @PageableDefault(size = 20, sort = "id") Pageable pageable) {
        return ResponseEntity.ok(productService.getProductsOnOffer(pageable));
    }

    @GetMapping("/search")
    public ResponseEntity<PageResponse<ProductDto>> searchProducts(
            @RequestParam String query,
            @PageableDefault(size = 20, sort = "id") Pageable pageable) {
        return ResponseEntity.ok(productService.searchProducts(query, pageable));
    }
}

