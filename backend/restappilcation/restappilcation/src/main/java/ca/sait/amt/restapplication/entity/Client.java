package ca.sait.amt.restapplication.entity;
// Generated Jan. 19, 2023, 2:55:38 p.m. by Hibernate Tools 4.3.6.Final

import static jakarta.persistence.GenerationType.IDENTITY;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

/**
 * Client generated by hbm2java
 */
@Entity
@Table(name = "client", catalog = "amt")
public class Client implements java.io.Serializable {

	private Integer clientId;
	private ClientContact clientContact;
	private String clientName;
	private Set<Project> projects = new HashSet<Project>(0);

	public Client() {
	}

	public Client(ClientContact clientContact, String clientName, Set<Project> projects) {
		this.clientContact = clientContact;
		this.clientName = clientName;
		this.projects = projects;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)

	@Column(name = "client_id", unique = true, nullable = false)
	public Integer getClientId() {
		return this.clientId;
	}

	public void setClientId(Integer clientId) {
		this.clientId = clientId;
	}

	@OneToOne(fetch = FetchType.LAZY, cascade=CascadeType.ALL)
	@JoinColumn(name = "client_contact_id")
	@JsonManagedReference
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	public ClientContact getClientContact() {
		return this.clientContact;
	}

	public void setClientContact(ClientContact clientContact) {
		this.clientContact = clientContact;
	}

	@Column(name = "client_name", length = 80)
	public String getClientName() {
		return this.clientName;
	}

	public void setClientName(String clientFirstName) {
		this.clientName = clientFirstName;
	}


	@OneToMany(fetch = FetchType.EAGER, mappedBy = "client")
	public Set<Project> getProjects() {
		return this.projects;
	}

	public void setProjects(Set<Project> projects) {
		this.projects = projects;
	}

}
