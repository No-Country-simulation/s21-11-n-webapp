package com.bakesoft.bakesoft.common.mapper;

import org.springframework.data.domain.Page;

import java.util.List;
import java.util.stream.Collectors;

public interface EntityMapper<E, D> {

    D toDto(E entity);

    E toEntity(D dto);

    default List<D> toDtoList(List<E> entities) {
        return entities.stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    default List<E> toEntityList(List<D> dtos) {
        return dtos.stream()
                .map(this::toEntity)
                .collect(Collectors.toList());
    }

    default Page<D> toDtoPage(Page<E> entityPage) {
        return entityPage.map(this::toDto);
    }
}

