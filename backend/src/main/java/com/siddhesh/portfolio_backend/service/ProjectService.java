package com.siddhesh.portfolio_backend.service;

import com.siddhesh.portfolio_backend.model.Project;
import com.siddhesh.portfolio_backend.repository.ProjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.time.Instant;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Optional<Project> getProjectById(String id) {
        return projectRepository.findById(id);
    }

    public Project createProject(Project project) {
        return projectRepository.save(project);
    }

    public Project updateProject(String id, Project updatedProject) {
        return projectRepository.findById(id)
                .map(existingProject -> {
                    existingProject.setTitle(updatedProject.getTitle());
                    existingProject.setDescription(updatedProject.getDescription());
                    existingProject.setTechStack(updatedProject.getTechStack());
                    existingProject.setTags(updatedProject.getTags());
                    existingProject.setImages(updatedProject.getImages());
                    existingProject.setGithubUrl(updatedProject.getGithubUrl());
                    existingProject.setLiveUrl(updatedProject.getLiveUrl());
                    existingProject.setFeatured(updatedProject.isFeatured());
                    existingProject.setOrder(updatedProject.getOrder());
                    existingProject.setStatus(updatedProject.getStatus());

                    return projectRepository.save(existingProject);
                })
                .orElseThrow(() -> new RuntimeException("Project not found"));
    }

    public void deleteProject(String id) {
        projectRepository.deleteById(id);
    }
}