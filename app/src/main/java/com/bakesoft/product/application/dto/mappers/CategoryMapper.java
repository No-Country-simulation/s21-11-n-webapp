package com.bakesoft.product.application.dto.mappers;


import com.bakesoft.common.mapper.EntityMapper;
import com.bakesoft.product.application.dto.CategoryDto;
import com.bakesoft.product.domain.model.Category;
import org.springframework.stereotype.Component;

@Component
public class CategoryMapper implements EntityMapper<Category, CategoryDto> {

    @Override
    public CategoryDto toDto(Category entity) {
        if (entity == null) {
            return null;
        }

        return CategoryDto.builder()
                .id(entity.getId())
                .name(entity.getName())
                .description(entity.getDescription())
                .thumbnail(entity.getThumbnail())
                .build();
    }

    @Override
    public Category toEntity(CategoryDto dto) {
        // Implementation would be needed for create/update operations
        throw new UnsupportedOperationException("Category entity creation from DTO is not implemented");
    }
}

