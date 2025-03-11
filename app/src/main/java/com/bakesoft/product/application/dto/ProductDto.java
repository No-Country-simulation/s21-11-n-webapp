package com.bakesoft.product.application.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Set;
import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductDto {
    private UUID id;
    private String name;
    private String coverPicture;
    private String description;
    private Double price;
    private Integer currentStock;
    private Integer totalRating;
    private Integer totalFavorites;
    private Boolean inOffer;
    private Double offerPercentageDiscount;
    private Set<CategoryDto> categories;
    private LocalDateTime createdAt;
}

