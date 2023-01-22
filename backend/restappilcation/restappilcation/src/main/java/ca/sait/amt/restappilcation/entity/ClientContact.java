package ca.sait.amt.restappilcation.entity;
// Generated Jan. 19, 2023, 2:55:38 p.m. by Hibernate Tools 4.3.6.Final

import static jakarta.persistence.GenerationType.IDENTITY;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

/**
 * ClientContact generated by hbm2java
 */
@Entity
@Table(name = "client_contact", catalog = "amt")
public class ClientContact implements java.io.Serializable {

	private Integer clientContactId;
	private Integer personalContactNumber;
	private String personalEmail;
	private String businessEmail;
	private Integer clientId;
	private Set<Client> clients = new HashSet<Client>(0);

	public ClientContact() {
	}

	public ClientContact(Integer personalContactNumber, String personalEmail, String businessEmail, Integer clientId,
			Set<Client> clients) {
		this.personalContactNumber = personalContactNumber;
		this.personalEmail = personalEmail;
		this.businessEmail = businessEmail;
		this.clientId = clientId;
		this.clients = clients;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)

	@Column(name = "client_contact_id", unique = true, nullable = false)
	public Integer getClientContactId() {
		return this.clientContactId;
	}

	public void setClientContactId(Integer clientContactId) {
		this.clientContactId = clientContactId;
	}

	@Column(name = "personal_contact_number")
	public Integer getPersonalContactNumber() {
		return this.personalContactNumber;
	}

	public void setPersonalContactNumber(Integer personalContactNumber) {
		this.personalContactNumber = personalContactNumber;
	}

	@Column(name = "personal_email", length = 45)
	public String getPersonalEmail() {
		return this.personalEmail;
	}

	public void setPersonalEmail(String personalEmail) {
		this.personalEmail = personalEmail;
	}

	@Column(name = "business_email", length = 45)
	public String getBusinessEmail() {
		return this.businessEmail;
	}

	public void setBusinessEmail(String businessEmail) {
		this.businessEmail = businessEmail;
	}

	@Column(name = "client_id")
	public Integer getClientId() {
		return this.clientId;
	}

	public void setClientId(Integer clientId) {
		this.clientId = clientId;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "clientContact")
	public Set<Client> getClients() {
		return this.clients;
	}

	public void setClients(Set<Client> clients) {
		this.clients = clients;
	}

}