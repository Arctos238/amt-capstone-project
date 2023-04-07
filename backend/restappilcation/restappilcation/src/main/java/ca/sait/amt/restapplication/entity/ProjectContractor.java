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
@Table(name = "project_contractor", catalog = "amt")
public class ProjectContractor implements java.io.Serializable {
	private Integer projectContractorId;
	private String projectContractorName;
	private String projectContractorNumber;
	private String projectContractorEmail;
	private Project project;

	public ProjectContractor() {

	}

	public ProjectContractor(String projectContractorName, String projectContractorNumber,
			String projectContractorEmail, Project project) {
		super();
		this.projectContractorName = projectContractorName;
		this.projectContractorNumber = projectContractorNumber;
		this.projectContractorEmail = projectContractorEmail;
		this.project = project;
	}


	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "project_contractor_id")
	public Integer getProjectContractorId() {
		return this.projectContractorId;
	}


	public void setProjectContractorId(Integer projectContractorId) {
		this.projectContractorId = projectContractorId;
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

	@Column(name = "project_contractor_name")
	public String getProjectContractorName() {
		return projectContractorName;
	}

	public void setProjectContractorName(String projectContractorName) {
		this.projectContractorName = projectContractorName;
	}

	@Column(name = "project_contractor_number")
	public String getProjectContractorNumber() {
		return projectContractorNumber;
	}

	public void setProjectContractorNumber(String projectContractorNumber) {
		this.projectContractorNumber = projectContractorNumber;
	}

	@Column(name = "project_contractor_email")
	public String getProjectContractorEmail() {
		return projectContractorEmail;
	}


	public void setProjectContractorEmail(String projectContractorEmail) {
		this.projectContractorEmail = projectContractorEmail;
	}
	
	@Transient
	public Integer getProjectId() {
		return project.getProjectId();
	}

}
