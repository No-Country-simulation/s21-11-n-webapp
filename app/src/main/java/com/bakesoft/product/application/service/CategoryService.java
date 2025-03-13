package com.bakesoft.product.application.service;
import com.bakesoft.common.dto.PageResponse;
import com.bakesoft.product.application.dto.CategoryDto;
import com.bakesoft.product.application.dto.mappers.CategoryMapper;
import com.bakesoft.product.domain.model.Category;
import com.bakesoft.product.domain.port.ICategoryRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final ICategoryRepository categoryRepository;
    private final CategoryMapper categoryMapper;

    public List<CategoryDto> getAllActiveCategories() {
        List<Category> categories = categoryRepository.findByIsActiveTrue();
        return categories.stream()
                .map(categoryMapper::toDto)
                .collect(Collectors.toList());
    }

    public PageResponse<CategoryDto> getAllCategories(Pageable pageable) {
        Page<Category> categoryPage = categoryRepository.findAll(pageable);
        Page<CategoryDto> dtoPage = categoryPage.map(categoryMapper::toDto);
        return PageResponse.of(dtoPage);
    }

    public CategoryDto getCategoryById(UUID id) {
        Category category = categoryRepository.findByCategoryIdAndIsActiveTrue(id)
                .orElseThrow(() -> new EntityNotFoundException("Category not found with id: " + id));
        return categoryMapper.toDto(category);
    }

    @Transactional
    public CategoryDto createCategory(CategoryDto categoryDto) {
        Category category = categoryMapper.toEntity(categoryDto);
        category.setCategoryId(UUID.randomUUID()); // Generar un ID único
        category.setIsActive(true); // Ensure new categories are active by default
        category = categoryRepository.save(category);
        return categoryMapper.toDto(category);
    }

    @Transactional
    public CategoryDto updateCategory(UUID id, CategoryDto categoryDto) {
        Category category = categoryRepository.findByCategoryIdAndIsActiveTrue(id)
                .orElseThrow(() -> new EntityNotFoundException("Category not found with id: " + id));

        // Update only non-null fields
        if (categoryDto.getName() != null) {
            category.setName(categoryDto.getName());
        }
        if (categoryDto.getDescription() != null) {
            category.setDescription(categoryDto.getDescription());
        }
        if (categoryDto.getThumbnail() != null) {
            category.setThumbnail(categoryDto.getThumbnail());
        }
        if (categoryDto.getIsActive() != null) {
            category.setIsActive(categoryDto.getIsActive());
        }

        category = categoryRepository.save(category);
        return categoryMapper.toDto(category);
    }

    @Transactional
    public void deleteCategory(UUID id) {
        Category category = categoryRepository.findByCategoryIdAndIsActiveTrue(id)
                .orElseThrow(() -> new EntityNotFoundException("Category not found with id: " + id));

        // Soft delete by setting isActive to false
        category.setIsActive(false);
        categoryRepository.save(category);
    }
}