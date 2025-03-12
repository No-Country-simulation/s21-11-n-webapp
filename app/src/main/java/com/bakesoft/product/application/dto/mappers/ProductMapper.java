package com.bakesoft.product.application.dto.mappers;

import com.bakesoft.common.mapper.EntityMapper;
import com.bakesoft.product.application.dto.CategoryDto;
import com.bakesoft.product.application.dto.ProductDto;
import com.bakesoft.product.application.dto.ProductRequestDto;
import com.bakesoft.product.domain.model.Category;
import com.bakesoft.product.domain.model.Product;
import com.bakesoft.product.domain.port.ICategoryRepository;
import lombok.RequiredArgsConstructor;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class ProductMapper implements EntityMapper<Product, ProductDto> {

    private final CategoryMapper categoryMapper;
    private final ICategoryRepository categoryRepository;

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
        if (dto == null) {
            return null;
        }

        Set<Category> categories = new HashSet<>();
        if (dto.getCategories() != null) {
            categories = dto.getCategories().stream()
                    .map(categoryDto -> {
                        if (categoryDto.getId() != null) {
                            return categoryRepository.findById(categoryDto.getId())
                                    .orElse(categoryMapper.toEntity(categoryDto));
                        } else {
                            return categoryMapper.toEntity(categoryDto);
                        }
                    })
                    .collect(Collectors.toSet());
        }

        return Product.builder()
                .name(dto.getName())
                .coverPicture(dto.getCoverPicture())
                .description(dto.getDescription())
                .price(dto.getPrice())
                .currentStock(dto.getCurrentStock())
                .totalRating(dto.getTotalRating() != null ? dto.getTotalRating() : 0)
                .totalFavorites(dto.getTotalFavorites() != null ? dto.getTotalFavorites() : 0)
                .inOffer(dto.getInOffer())
                .offerPercentageDiscount(dto.getOfferPercentageDiscount())
                .categories(categories)
                .build();
    }

    public Product toEntity(ProductRequestDto request) {
        if (request == null) {
            return null;
        }

        return Product.builder()
                .name(request.getName())
                .coverPicture(request.getCoverPicture())
                .description(request.getDescription())
                .price(request.getPrice())
                .currentStock(request.getCurrentStock())
                .totalRating(0)
                .totalFavorites(0)
                .inOffer(request.getInOffer())
                .offerPercentageDiscount(request.getOfferPercentageDiscount())
                .categories(new HashSet<>())
                .build();
    }

    @Mapping(target = "id", ignore = true) // Evita que se sobrescriba el ID
    @Mapping(target = "categories", ignore = true) // Si no quieres actualizar categorías automáticamente
    @Mapping(target = "active", ignore = true)
        // No permite modificar si está activo
    public void updateProductFromDto(ProductDto dto, @MappingTarget Product entity) {
        dto.setName(entity.getName());
        dto.setCoverPicture(entity.getCoverPicture());
        dto.setDescription(entity.getDescription());
        dto.setPrice(entity.getPrice());
        dto.setCurrentStock(entity.getCurrentStock());
        dto.setInOffer(entity.getInOffer());
        dto.setOfferPercentageDiscount(entity.getOfferPercentageDiscount());
    }
}

