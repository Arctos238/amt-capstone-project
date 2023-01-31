package ca.sait.amt.restapplication.DAO;

import java.util.List;

import ca.sait.amt.restapplication.entity.Project;

public interface ProjectDAO {

		public List<Project> findAll();
		
		public List<Project> findProjectsByClientId(int id);
		
		public Project findProjectByProjectId(int id);

		public void saveProject(Project project);

		public void deleteProject(int id);
	}


