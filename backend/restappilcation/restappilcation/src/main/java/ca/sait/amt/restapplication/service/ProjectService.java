package ca.sait.amt.restapplication.service;

import java.util.List;

import ca.sait.amt.restapplication.entity.Project;

public interface ProjectService {
	public List<Project> findAll();
	
	public List<Project> findProjectsByClientId(int clientId);
	
	public Project findByProjectId(int projectId);
	
	public void deleteProject(int projectId);
	
	public void saveProject(Project project);
}
