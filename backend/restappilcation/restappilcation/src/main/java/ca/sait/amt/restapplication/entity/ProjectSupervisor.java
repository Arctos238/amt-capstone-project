package ca.sait.amt.restapplication.entity;

import static jakarta.persistence.GenerationType.IDENTITY;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "project_supervisor", catalog = "amt")
public class ProjectSupervisor implements java.io.Serializable {
	private Integer projectSupervisorId;
	private String projectSupervisorName;
	private String projectSupervisorNumber;
	private Project project;

	public ProjectSupervisor() {

	}
	
	
	public ProjectSupervisor(String projectSupervisorName, String projectSupervisorNumber,
			Project project) {
		this.projectSupervisorName = projectSupervisorName;
		this.projectSupervisorNumber = projectSupervisorNumber;
		this.project = project;
	}
	
	@Id
	@GeneratedValue(strategy = IDENTITY)

	@Column(name = "client_id", unique = true, nullable = false)
	public Integer getClientId() {
		return this.projectSupervisorId;
	}


	public void setClientId(Integer projectSupervisorId) {
		this.projectSupervisorId = projectSupervisorId;
	}
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "project_id")
	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	@Column(name = "project_supervisor_name")
	public String getProjectSupervisorName() {
		return projectSupervisorName;
	}

	public void setProjectSupervisorName(String projectSupervisorName) {
		this.projectSupervisorName = projectSupervisorName;
	}

	@Column(name = "project_supervisor_number")
	public String getProjectSupervisorNumber() {
		return projectSupervisorNumber;
	}

	public void setProjectSupervisorNumber(String projectSupervisorNumber) {
		this.projectSupervisorNumber = projectSupervisorNumber;
	}

}
