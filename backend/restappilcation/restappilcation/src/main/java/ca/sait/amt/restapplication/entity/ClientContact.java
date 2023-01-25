package ca.sait.amt.restapplication.entity;
// Generated Jan. 19, 2023, 2:55:38 p.m. by Hibernate Tools 4.3.6.Final

import static jakarta.persistence.GenerationType.IDENTITY;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

/**
 * ClientContact generated by hbm2java
 */
@Entity
@Table(name = "client_contact", catalog = "amt")
public class ClientContact implements java.io.Serializable {

	private Integer clientContactId;
	private String personalContactNumber;
	private String personalEmail;
	private String businessEmail;
	private Integer clientId;
	private Client clients;

	public ClientContact() {
	}

	public ClientContact(String personalContactNumber, String personalEmail, String businessEmail, Integer clientId,
			Client client) {
		this.personalContactNumber = personalContactNumber;
		this.personalEmail = personalEmail;
		this.businessEmail = businessEmail;
		this.clientId = clientId;
		this.clients = client;
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
	public String getPersonalContactNumber() {
		return this.personalContactNumber;
	}

	public void setPersonalContactNumber(String personalContactNumber) {
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

	@OneToOne(fetch = FetchType.EAGER, mappedBy = "clientContact")
	public Client getClients() {
		return this.clients;
	}

	public void setClients(Client client) {
		this.clients = clients;
	}

}