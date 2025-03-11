package com.bakesoft.product.application.dto.mappers;

import com.bakesoft.common.mapper.EntityMapper;
import com.bakesoft.product.application.dto.ProductDto;
import com.bakesoft.product.domain.model.Product;
import lombok.RequiredArgsConstructor;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class ProductMapper implements EntityMapper<Product, ProductDto> {

    private final CategoryMapper categoryMapper;

    @Override
    public ProductDto toDto(Product entity) {
        if (entity == null) {
            return null;
        }

        return ProductDto.builder()
                .id(entity.getId())
                .name(entity.getName())
                .coverPicture(entity.getCoverPicture())
                .description(entity.getDescription())
                .price(entity.getPrice())
                .currentStock(entity.getCurrentStock())
                .totalRating(entity.getTotalRating())
                .totalFavorites(entity.getTotalFavorites())
                .inOffer(entity.getInOffer())
                .offerPercentageDiscount(entity.getOfferPercentageDiscount())
                .categories(entity.getCategories() != null ?
                        entity.getCategories().stream()
                                .map(categoryMapper::toDto)
                                .collect(Collectors.toSet()) :
                        null)
                .createdAt(entity.getCreatedAt())
                .build();
    }

    @Override
    public Product toEntity(ProductDto dto) {
        // Implementation would be needed for create/update operations
        throw new UnsupportedOperationException("Product entity creation from DTO is not implemented");
    }

    @Mapping(target = "id", ignore = true) // Evita que se sobrescriba el ID
    @Mapping(target = "categories", ignore = true) // Si no quieres actualizar categorías automáticamente
    @Mapping(target = "active", ignore = true)
        // No permite modificar si está activo
    void updateProductFromDto(ProductDto dto, @MappingTarget Product entity) {

    }

}

