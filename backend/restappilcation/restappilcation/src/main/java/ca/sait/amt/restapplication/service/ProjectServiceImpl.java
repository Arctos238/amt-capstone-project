package ca.sait.amt.restapplication.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ca.sait.amt.restapplication.DAO.ProjectDAO;
import ca.sait.amt.restapplication.entity.Project;

@Service
public class ProjectServiceImpl implements ProjectService {
	ProjectDAO projectDAO;
	
	@Autowired
	public ProjectServiceImpl(ProjectDAO projectDAO) {
		this.projectDAO = projectDAO;
	}
	
	@Override
	@Transactional
	public List<Project> findAll() {
		return projectDAO.findAll();
	}

	@Override
	@Transactional
	public List<Project> findProjectsByClientId(int clientId) {
		return projectDAO.findProjectsByClientId(clientId);
	}

	@Override
	@Transactional
	public Project findByProjectId(int projectId) {
		return projectDAO.findProjectByProjectId(projectId);
	}

	@Override
	@Transactional
	public void deleteProject(int projectId) {
		projectDAO.deleteProject(projectId);
	}

	@Override
	@Transactional
	public void saveProject(Project project) {
		projectDAO.saveProject(project);
	}

}
