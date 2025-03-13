package com.bakesoft.product.application.service;

import com.bakesoft.common.dto.PageResponse;
import com.bakesoft.product.application.dto.ProductDto;
import com.bakesoft.product.application.dto.mappers.ProductMapper;
import com.bakesoft.product.domain.model.Product;
import com.bakesoft.product.domain.port.IProductRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final IProductRepository productRepository;
    private final ProductMapper productMapper;

    public PageResponse<ProductDto> getAllProducts(Pageable pageable) {
        Page<Product> productPage = productRepository.findByIsActiveTrue(pageable);
        Page<ProductDto> responsePage = productMapper.toDtoPage(productPage);
        return PageResponse.of(responsePage);
    }

    public ProductDto getProductById(UUID id) {
        Product product = productRepository.findByProductIdAndIsActiveTrue(id)
                .orElseThrow(() -> new EntityNotFoundException("Product not found with id: " + id));
        return productMapper.toDto(product);
    }

    public PageResponse<ProductDto> getProductsByCategory(UUID categoryId, Pageable pageable) {
        Page<Product> productPage = productRepository.findByCategoriesCategoryIdAndIsActiveTrue(categoryId, pageable);
        Page<ProductDto> responsePage = productMapper.toDtoPage(productPage);
        return PageResponse.of(responsePage);
    }

    public PageResponse<ProductDto> getProductsOnOffer(Pageable pageable) {
        Page<Product> productPage = productRepository.findByInOfferTrueAndIsActiveTrue(pageable);
        Page<ProductDto> responsePage = productMapper.toDtoPage(productPage);
        return PageResponse.of(responsePage);
    }

    public PageResponse<ProductDto> searchProducts(String query, Pageable pageable) {
        Page<Product> productPage = productRepository.findByNameContainingIgnoreCaseAndIsActiveTrue(query, pageable);
        Page<ProductDto> responsePage = productMapper.toDtoPage(productPage);
        return PageResponse.of(responsePage);
    }

    public ProductDto createProduct(ProductDto productDto) {
        Product product = productMapper.toEntity(productDto);
        product.setActive(true); // El producto se crea activo por defecto
        product = productRepository.save(product);
        return productMapper.toDto(product);
    }

    public ProductDto updateProduct(UUID id, ProductDto productDto) {
        Product existingProduct = productRepository.findByProductIdAndIsActiveTrue(id)
                .orElseThrow(() -> new EntityNotFoundException("Product not found with id: " + id));

        productMapper.updateProductFromDto(productDto, existingProduct); // Actualizar los datos del producto
        existingProduct = productRepository.save(existingProduct);
        return productMapper.toDto(existingProduct);
    }
}