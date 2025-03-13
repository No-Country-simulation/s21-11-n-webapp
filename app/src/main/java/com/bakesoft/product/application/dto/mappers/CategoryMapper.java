package com.bakesoft.product.application.dto.mappers;


import com.bakesoft.common.mapper.EntityMapper;
import com.bakesoft.product.application.dto.CategoryDto;
import com.bakesoft.product.application.dto.CategoryRequestDto;
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
                .id(entity.getCategoryId())
                .name(entity.getName())
                .description(entity.getDescription())
                .thumbnail(entity.getThumbnail())
                .build();
    }

    @Override
    public Category toEntity(CategoryDto dto) {
        if (dto == null) {
            return null;
        }

        Category category = new Category();
        category.setCategoryId(dto.getId());
        category.setName(dto.getName());
        category.setDescription(dto.getDescription());
        category.setThumbnail(dto.getThumbnail());
        category.setIsActive(dto.getIsActive() != null ? dto.getIsActive() : true);
        return category;
    }

    public Category toEntity(CategoryRequestDto request) {
        if (request == null) {
            return null;
        }

        Category category = new Category();
        category.setName(request.getName());
        category.setDescription(request.getDescription());
        category.setThumbnail(request.getThumbnail());
        category.setIsActive(request.getIsActive());
        return category;
    }

    public void updateEntityFromRequest(Category category, CategoryRequestDto request) {
        category.setName(request.getName());
        category.setDescription(request.getDescription());
        category.setThumbnail(request.getThumbnail());
        category.setIsActive(request.getIsActive());
    }
}

