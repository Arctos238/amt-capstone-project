package ca.sait.amt.restappilcation.entity;
// Generated Jan. 19, 2023, 2:36:38 p.m. by Hibernate Tools 4.3.6.Final

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * DepositForm generated by hbm2java
 */
@Entity
@Table(name = "deposit_form", catalog = "amt")
public class DepositForm implements java.io.Serializable {

	private Integer depositFormId;
	private int depositFormStatus;
	private double depositAmount;
	private Integer projectId;

	public DepositForm() {
	}

	public DepositForm(int depositFormStatus, double depositAmount) {
		this.depositFormStatus = depositFormStatus;
		this.depositAmount = depositAmount;
	}

	public DepositForm(int depositFormStatus, double depositAmount, Integer projectId) {
		this.depositFormStatus = depositFormStatus;
		this.depositAmount = depositAmount;
		this.projectId = projectId;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	@Column(name = "deposit_form_id", unique = true, nullable = false)
	public Integer getDepositFormId() {
		return this.depositFormId;
	}

	public void setDepositFormId(Integer depositFormId) {
		this.depositFormId = depositFormId;
	}

	@Column(name = "deposit_form_status", nullable = false)
	public int getDepositFormStatus() {
		return this.depositFormStatus;
	}

	public void setDepositFormStatus(int depositFormStatus) {
		this.depositFormStatus = depositFormStatus;
	}

	@Column(name = "deposit_amount", nullable = false, precision = 8)
	public double getDepositAmount() {
		return this.depositAmount;
	}

	public void setDepositAmount(double depositAmount) {
		this.depositAmount = depositAmount;
	}

	@Column(name = "project_id")
	public Integer getProjectId() {
		return this.projectId;
	}

	public void setProjectId(Integer projectId) {
		this.projectId = projectId;
	}

}
