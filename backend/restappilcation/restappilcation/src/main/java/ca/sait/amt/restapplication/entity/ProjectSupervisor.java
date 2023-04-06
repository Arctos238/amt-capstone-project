package ca.sait.amt.restapplication.entity;

import static jakarta.persistence.GenerationType.IDENTITY;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;

@Entity
@Table(name = "project_supervisor", catalog = "amt")
public class ProjectSupervisor implements java.io.Serializable {
	private Integer projectSupervisorId;
	private String projectSupervisorName;
	private String projectSupervisorNumber;
	private String projectSupervisorEmail;
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
	@Column(name = "project_supervisor_id")
	public Integer getProjectSupervisorId() {
		return this.projectSupervisorId;
	}


	public void setProjectSupervisorId(Integer projectSupervisorId) {
		this.projectSupervisorId = projectSupervisorId;
	}
	
	@OneToOne(fetch = FetchType.LAZY)
	@JsonBackReference
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
	
	@Column(name = "project_supervisor_email")
	public String getProjectSupervisorEmail() {
		return projectSupervisorEmail;
	}

	public void setProjectSupervisorEmail(String projectSupervisorEmail) {
		this.projectSupervisorEmail = projectSupervisorEmail;
	}
	
	@Transient
	public Integer getProjectId() {
		return project.getProjectId();
	}

}
