package com.siddhesh.portfolio_backend.service;

import com.siddhesh.portfolio_backend.model.Project;
import com.siddhesh.portfolio_backend.repository.ProjectRepository;
import org.springframework.stereotype.Service;
import com.siddhesh.portfolio_backend.dto.ProjectRequest;
import java.util.List;
import java.time.Instant;
import com.siddhesh.portfolio_backend.exception.ProjectNotFoundException;
@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Project getProjectById(String id) {
        return projectRepository.findById(id)
            .orElseThrow(() -> new ProjectNotFoundException(id));
    }

    public Project createProject(ProjectRequest request) {
        Project project = new Project();

        project.setTitle(request.getTitle());
        project.setDescription(request.getDescription());
        project.setTechStack(request.getTechStack());
        project.setTags(request.getTags());
        project.setImages(request.getImages());
        project.setGithubUrl(request.getGithubUrl());
        project.setLiveUrl(request.getLiveUrl());
        project.setFeatured(request.isFeatured());
        project.setOrder(request.getOrder());

        Instant now = Instant.now();

        project.setCreatedAt(now);
        project.setUpdatedAt(now);
        project.setStatus("published");


        return projectRepository.save(project);
    }

    


    public Project updateProject(String id, ProjectRequest request) {
        Project existingProject = projectRepository.findById(id)
            .orElseThrow(() -> new ProjectNotFoundException(id));

        existingProject.setTitle(request.getTitle());
        existingProject.setDescription(request.getDescription());
        existingProject.setTechStack(request.getTechStack());
        existingProject.setTags(request.getTags());
        existingProject.setImages(request.getImages());
        existingProject.setGithubUrl(request.getGithubUrl());
        existingProject.setLiveUrl(request.getLiveUrl());
        existingProject.setFeatured(request.isFeatured());
        existingProject.setOrder(request.getOrder());
        existingProject.setUpdatedAt(Instant.now());

        return projectRepository.save(existingProject);
}

    public void deleteProject(String id) {
        projectRepository.deleteById(id);
    }
}