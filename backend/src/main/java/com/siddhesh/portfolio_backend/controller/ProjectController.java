package com.siddhesh.portfolio_backend.controller;


import com.siddhesh.portfolio_backend.model.Project;
import com.siddhesh.portfolio_backend.service.ProjectService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.siddhesh.portfolio_backend.dto.ProjectRequest;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    // GET /api/projects
    @GetMapping
    public ResponseEntity<List<Project>> getAllProjects() {
        return ResponseEntity.ok(projectService.getAllProjects());
    }

    // GET /api/projects/{id}
    @GetMapping("/{id}")
    public ResponseEntity<Project> getProjectById(@PathVariable String id) {
        Project project = projectService.getProjectById(id);

        return ResponseEntity.ok(project);
    }


    // POST /api/projects
    @PostMapping
    public ResponseEntity<Project> createProject(
        @Valid @RequestBody ProjectRequest request
    ) {
        Project createdProject = projectService.createProject(request);

        return ResponseEntity
            .status(201)
            .body(createdProject);
    }

    // PUT /api/projects/{id}
    @PutMapping("/{id}")
        public ResponseEntity<Project> updateProject(
            @PathVariable String id,
            @Valid @RequestBody ProjectRequest request
    ) {
        Project updatedProject = projectService.updateProject(id, request);

        return ResponseEntity.ok(updatedProject);
    }


    // DELETE /api/projects/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProject(@PathVariable String id) {
        projectService.deleteProject(id);

        return ResponseEntity.noContent().build();
    }
}