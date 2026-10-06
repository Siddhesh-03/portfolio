package com.siddhesh.portfolio_backend.config;

import com.siddhesh.portfolio_backend.dto.ErrorResponse;
import com.siddhesh.portfolio_backend.exception.ProjectNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.LinkedHashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidationException(
            MethodArgumentNotValidException exception
    ) {
        Map<String, String> details = new LinkedHashMap<>();

        exception.getBindingResult()
                .getFieldErrors()
                .forEach(error ->
                        details.put(error.getField(), error.getDefaultMessage())
                );

        ErrorResponse response = new ErrorResponse(
                "Validation failed",
                details
        );

        return ResponseEntity.badRequest().body(response);
    }

    @ExceptionHandler(ProjectNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleProjectNotFound(
            ProjectNotFoundException exception
    ) {
        ErrorResponse response = new ErrorResponse(
                exception.getMessage(),
                Map.of()
        );

        return ResponseEntity.status(404).body(response);
    }
}