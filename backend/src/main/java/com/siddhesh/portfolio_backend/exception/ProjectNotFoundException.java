package com.siddhesh.portfolio_backend.exception;

public class ProjectNotFoundException extends RuntimeException {

    public ProjectNotFoundException(String id) {
        super("Project not found with id: " + id);
    }
}