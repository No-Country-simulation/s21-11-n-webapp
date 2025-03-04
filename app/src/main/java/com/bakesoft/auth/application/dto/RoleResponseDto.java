package com.bakesoft.auth.application.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import java.util.UUID;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({"roleId", "name"})
public record RoleResponseDto(UUID roleId, String name) {
}
