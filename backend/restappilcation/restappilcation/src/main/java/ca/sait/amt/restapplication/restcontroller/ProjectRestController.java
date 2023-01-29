package ca.sait.amt.restapplication.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.sait.amt.restapplication.entity.Project;
import ca.sait.amt.restapplication.service.ProjectService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class ProjectRestController {
		private ProjectService projectService;
		
		@Autowired
		public ProjectRestController(ProjectService projectService) {
			this.projectService = projectService;
		}
		
		@GetMapping("/projects")
		public List<Project> getAll() {
			return projectService.findAll();
		}
		
		@GetMapping("/projects/{clientId}") 
		public List<Project> getProjectsByClientId(@PathVariable int clientId) {
			return projectService.findProjectsByClientId(clientId);
		}
		
		@GetMapping("/projects/id/{projectId}") 
		public Project getProjectByProjectId(@PathVariable int projectId) {
			return projectService.findByProjectId(projectId);
		}
		
		@PostMapping("/projects")
		public void addProject(@RequestBody Project project) {
			project.setProjectId(0);
			
			projectService.saveProject(project);
		}
		
		@PutMapping("/projects")
		public void updateProject(@RequestBody Project project) {
			projectService.saveProject(project);
		}
		
		@DeleteMapping("/projects/id/{projectId}")
		public void deleteProject(@PathVariable int projectId) {
			projectService.deleteProject(projectId);
		}
}
