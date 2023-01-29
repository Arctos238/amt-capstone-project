package ca.sait.amt.restapplication.entity;
// Generated Jan. 19, 2023, 2:55:38 p.m. by Hibernate Tools 4.3.6.Final

import static jakarta.persistence.GenerationType.IDENTITY;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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

/**
 * Project generated by hbm2java
 */
@Entity
@Table(name = "project", catalog = "amt")
public class Project implements java.io.Serializable {

	private Integer projectId;
	private Client client;
	private String projectName;
	private Boolean projectStatus;
	private Boolean projectCabinetsCondition;
	private Boolean projectCounterRemoval;
	private Boolean projectTileRemoval;
	private ProjectAddress projectAddress;
	private ProjectSupervisor projectSupervisor;
	private Set<Quote> quotes = new HashSet<Quote>(0);
	private Set<Image> images = new HashSet<Image>(0);
	private Set<PurchaseOrder> purchaseOrders = new HashSet<PurchaseOrder>(0);
	private Set<DepositForm> depositForms = new HashSet<DepositForm>(0);
	private Set<Invoice> invoices = new HashSet<Invoice>(0);

	public Project() {
	}

	public Project(String projectName) {
		this.projectName = projectName;
	}

	public Project(Integer projectId, Client client, String projectName, Boolean projectStatus,
			Boolean projectCabinetsCondition, Boolean projectCounterRemoval, Boolean projectTileRemoval,
			ProjectAddress projectAddress, ProjectSupervisor projectSupervisor, Set<Quote> quotes, Set<Image> images,
			Set<PurchaseOrder> purchaseOrders, Set<DepositForm> depositForms, Set<Invoice> invoices) {
		super();
		this.projectId = projectId;
		this.client = client;
		this.projectName = projectName;
		this.projectStatus = projectStatus;
		this.projectCabinetsCondition = projectCabinetsCondition;
		this.projectCounterRemoval = projectCounterRemoval;
		this.projectTileRemoval = projectTileRemoval;
		this.projectAddress = projectAddress;
		this.projectSupervisor = projectSupervisor;
		this.quotes = quotes;
		this.images = images;
		this.purchaseOrders = purchaseOrders;
		this.depositForms = depositForms;
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

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "client_id")
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
	public Set<Image> getImages() {
		return this.images;
	}

	public void setImages(Set<Image> images) {
		this.images = images;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "project")
	public Set<PurchaseOrder> getPurchaseOrders() {
		return this.purchaseOrders;
	}

	public void setPurchaseOrders(Set<PurchaseOrder> purchaseOrders) {
		this.purchaseOrders = purchaseOrders;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "project")
	public Set<DepositForm> getDepositForms() {
		return this.depositForms;
	}

	public void setDepositForms(Set<DepositForm> depositForms) {
		this.depositForms = depositForms;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "project")
	public Set<Invoice> getInvoices() {
		return this.invoices;
	}

	public void setInvoices(Set<Invoice> invoices) {
		this.invoices = invoices;
	}

	@OneToOne(fetch = FetchType.EAGER, mappedBy = "project") 
	@JoinColumn(name = "project_address")
	public ProjectAddress getProjectAddress() {
		return this.projectAddress;
	}
	
	public void setProjectAddress(ProjectAddress projectAddress) {
		this.projectAddress = projectAddress;
	}
	
	@OneToOne(fetch = FetchType.EAGER, mappedBy = "project") 
	@JoinColumn(name = "project_supervisor")
	public ProjectSupervisor getProjectSupervisor() {
		return this.projectSupervisor;
	}
	
	public void setProjectSupervisor(ProjectSupervisor projectSupervisor) {
		this.projectSupervisor = projectSupervisor;
	}
	
	
}
