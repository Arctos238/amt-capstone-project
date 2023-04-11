package ca.sait.amt.restapplication.entity;
// Generated Jan. 19, 2023, 2:55:38 p.m. by Hibernate Tools 4.3.6.Final

import static jakarta.persistence.GenerationType.IDENTITY;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;

/**
 * Project generated by hbm2java
 */
@Entity
@Table(name = "project", catalog = "amt")
public class Project implements java.io.Serializable {

	private Integer projectId;
	private Client client;
	private String projectName;
	private String employeeName;
	private Boolean projectStatus;
	private Boolean projectCabinetsCondition;
	private Boolean projectCounterRemoval;
	private Boolean projectTileRemoval;
	private ProjectAddress projectAddress;
	private ProjectSupervisor projectSupervisor;
	private ProjectContractor projectContractor;
	private Set<Quote> quotes = new HashSet<Quote>(0);
	private Set<Image> images = new HashSet<Image>(0);
	private Set<PurchaseOrder> purchaseOrders = new HashSet<PurchaseOrder>(0);
	private Set<Invoice> invoices = new HashSet<Invoice>(0);

	public Project() {
	}

	public Project(String projectName) {
		this.projectName = projectName;
	}

	public Project(Client client, String projectName, String employeeName, Boolean projectStatus,
			Boolean projectCabinetsCondition, Boolean projectCounterRemoval, Boolean projectTileRemoval,
			ProjectAddress projectAddress, ProjectSupervisor projectSupervisor, ProjectContractor projectContractor,
			Set<Quote> quotes, Set<Image> images, Set<PurchaseOrder> purchaseOrders, Set<Invoice> invoices) {
		super();
		this.client = client;
		this.projectName = projectName;
		this.employeeName = employeeName;
		this.projectStatus = projectStatus;
		this.projectCabinetsCondition = projectCabinetsCondition;
		this.projectCounterRemoval = projectCounterRemoval;
		this.projectTileRemoval = projectTileRemoval;
		this.projectAddress = projectAddress;
		this.projectSupervisor = projectSupervisor;
		this.projectContractor = projectContractor;
		this.quotes = quotes;
		this.images = images;
		this.purchaseOrders = purchaseOrders;
		this.invoices = invoices;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)

	@Column(name = "project_id", unique = true, nullable = false)
	public Integer getProjectId() {
		return this.projectId;
	}

	public void setProjectId(Integer projectId) {
		this.projectId = projectId;
	}

	@Column(name = "employee_name")
	public String getEmployeeName() {
		return employeeName;
	}

	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}

	@ManyToOne(fetch = FetchType.EAGER, cascade=CascadeType.DETACH)
	@JoinColumn(name= "client_id")
	@JsonBackReference
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	public Client getClient() {
		return this.client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	@Column(name = "project_name", nullable = false, length = 22)
	public String getProjectName() {
		return this.projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	
	@Column(name = "project_status")
	public Boolean getProjectStatus() {
		return this.projectStatus;
	}

	public void setProjectStatus(Boolean projectStatus) {
		this.projectStatus = projectStatus;
	}

	@Column(name = "project_cabinets_condition")
	public Boolean getProjectCabinetsCondition() {
		return projectCabinetsCondition;
	}

	public void setProjectCabinetsCondition(Boolean projectCabinetsCondition) {
		this.projectCabinetsCondition = projectCabinetsCondition;
	}

	@Column(name = "project_counter_removal")
	public Boolean getProjectCounterRemoval() {
		return projectCounterRemoval;
	}

	public void setProjectCounterRemoval(Boolean projectCounterRemoval) {
		this.projectCounterRemoval = projectCounterRemoval;
	}

	@Column(name = "project_tile_removal")
	public Boolean getProjectTileRemoval() {
		return projectTileRemoval;
	}

	public void setProjectTileRemoval(Boolean projectTileRemoval) {
		this.projectTileRemoval = projectTileRemoval;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "project")
	public Set<Quote> getQuotes() {
		return this.quotes;
	}

	public void setQuotes(Set<Quote> quotes) {
		this.quotes = quotes;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "project")
	@JsonManagedReference
	public Set<Image> getImages() {
		return this.images;
	}

	public void setImages(Set<Image> images) {
		this.images = images;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "project", cascade=CascadeType.ALL)
	public Set<PurchaseOrder> getPurchaseOrders() {
		return this.purchaseOrders;
	}

	public void setPurchaseOrders(Set<PurchaseOrder> purchaseOrders) {
		this.purchaseOrders = purchaseOrders;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "project", cascade=CascadeType.ALL)
	public Set<Invoice> getInvoices() {
		return this.invoices;
	}

	public void setInvoices(Set<Invoice> invoices) {
		this.invoices = invoices;
	}

	@OneToOne(fetch = FetchType.EAGER, mappedBy = "project", cascade=CascadeType.ALL)
	@JsonManagedReference
	public ProjectAddress getProjectAddress() {
		return this.projectAddress;
	}
	
	public void setProjectAddress(ProjectAddress projectAddress) {
		this.projectAddress = projectAddress;
	}
	
	@OneToOne(fetch = FetchType.EAGER, mappedBy = "project", cascade=CascadeType.ALL) 
	@JsonManagedReference
	@JoinColumn(name = "project_supervisor")
	public ProjectSupervisor getProjectSupervisor() {
		return this.projectSupervisor;
	}
	

	public void setProjectSupervisor(ProjectSupervisor projectSupervisor) {
		this.projectSupervisor = projectSupervisor;
	}
	
	@OneToOne(fetch = FetchType.EAGER, mappedBy = "project", cascade=CascadeType.ALL) 
	@JsonManagedReference
	@JoinColumn(name = "project_contractor")
	public ProjectContractor getProjectContractor() {
		return this.projectContractor;
	}
	

	public void setProjectContractor(ProjectContractor projectContractor) {
		this.projectContractor = projectContractor;
	}
	
	@Transient
	public Integer getClientId() {
		return client.getClientId();
	}

}
