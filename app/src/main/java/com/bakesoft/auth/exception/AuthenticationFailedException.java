package com.bakesoft.auth.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

//Usuario no autenticado
@ResponseStatus(HttpStatus.UNAUTHORIZED)
public class AuthenticationFailedException extends RuntimeException {
    public AuthenticationFailedException(String message) {
        super(message);
    }

    public AuthenticationFailedException(String message, Throwable cause) {
        super(message, cause);
    }
}

