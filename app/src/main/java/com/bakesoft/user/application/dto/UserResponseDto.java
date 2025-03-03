package com.bakesoft.user.application.dto;

import com.bakesoft.auth.application.dto.RoleResponseDto;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import java.util.Set;
import java.util.UUID;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({"userId", "email", "name", "lastname", "dni", "roles"})
public record UserResponseDto(
        UUID userId,
        String email,
        String name,
        String lastname,
        Set<RoleResponseDto> roles
) {
}
