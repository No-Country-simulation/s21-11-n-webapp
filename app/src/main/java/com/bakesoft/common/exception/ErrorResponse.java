package com.bakesoft.common.exception;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ErrorResponse {
    private String message;
    private Integer statusCode;
    private String details;
    private List<ValidationError> errors; // Opcional, solo se usa si hay validaciones

    public ErrorResponse(String message, Integer statusCode, String details) {
        this.message = message;
        this.statusCode = statusCode;
        this.details = details;
    }
}
