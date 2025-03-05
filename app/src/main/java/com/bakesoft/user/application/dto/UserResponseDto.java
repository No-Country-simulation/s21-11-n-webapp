package com.bakesoft.user.application.dto;

import com.bakesoft.auth.application.dto.RoleResponseDto;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import java.util.Set;
import java.util.UUID;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({"userId", "email", "roles", "isActive"})
public record UserResponseDto(
        UUID userId,
        String email,
        Set<RoleResponseDto> roles,
        Boolean isActive

) {
}
