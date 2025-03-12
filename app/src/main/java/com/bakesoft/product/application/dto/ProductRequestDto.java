package com.bakesoft.product.application.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductRequestDto {
    @NotBlank(message = "Product name is required")
    private String name;

    private String coverPicture;

    private String description;

    @NotNull(message = "Price is required")
    @Min(value = 0, message = "Price must be greater than or equal to 0")
    private Double price;

    @NotNull(message = "Current stock is required")
    @Min(value = 0, message = "Current stock must be greater than or equal to 0")
    private Integer currentStock;

    private Boolean inOffer = false;

    private Double offerPercentageDiscount;

    private Set<Integer> categoryIds;
}