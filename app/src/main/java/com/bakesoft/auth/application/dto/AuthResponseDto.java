package com.bakesoft.auth.application.dto;

import com.bakesoft.user.application.dto.UserResponseDto;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({"user", "token", "refreshToken"})
public record AuthResponseDto(
        UserResponseDto user,
        String token,
        String refreshToken
) {
}
