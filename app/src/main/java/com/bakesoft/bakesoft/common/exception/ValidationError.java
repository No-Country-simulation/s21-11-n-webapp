package com.bakesoft.bakesoft.common.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class ValidationError {
    private String field;
    private String message;
    private Object rejectedValue;


}
