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
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

/**
 * PurchaseOrder generated by hbm2java
 */
@Entity
@Table(name = "purchase_order", catalog = "amt")
public class PurchaseOrder implements java.io.Serializable {

	private Integer purchaseOrderId;
	private Project project;
	private int purchaseOrderNumber;
	private String documentName;
	private Double purchaseOrderTotalPrice;
	private Set<PurchaseOrderItem> purchaseOrderItems = new HashSet<PurchaseOrderItem>(0);

	public PurchaseOrder() {
	}

	public PurchaseOrder(int purchaseOrderNumber, String documentName) {
		this.purchaseOrderNumber = purchaseOrderNumber;
		this.documentName = documentName;
	}

	public PurchaseOrder(Project project, int purchaseOrderNumber, String documentName, Double purchaseOrderTotalPrice,
			Set<PurchaseOrderItem> purchaseOrderItems) {
		this.project = project;
		this.purchaseOrderNumber = purchaseOrderNumber;
		this.documentName = documentName;
		this.purchaseOrderTotalPrice = purchaseOrderTotalPrice;
		this.purchaseOrderItems = purchaseOrderItems;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)

	@Column(name = "purchase_order_id", unique = true, nullable = false)
	public Integer getPurchaseOrderId() {
		return this.purchaseOrderId;
	}

	public void setPurchaseOrderId(Integer purchaseOrderId) {
		this.purchaseOrderId = purchaseOrderId;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "project_id")
	public Project getProject() {
		return this.project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	@Column(name = "purchase_order_number", nullable = false)
	public int getPurchaseOrderNumber() {
		return this.purchaseOrderNumber;
	}

	public void setPurchaseOrderNumber(int purchaseOrderNumber) {
		this.purchaseOrderNumber = purchaseOrderNumber;
	}

	@Column(name = "document_name", nullable = false, length = 12)
	public String getDocumentName() {
		return this.documentName;
	}

	public void setDocumentName(String documentName) {
		this.documentName = documentName;
	}

	@Column(name = "purchase_order_total_price", precision = 8)
	public Double getPurchaseOrderTotalPrice() {
		return this.purchaseOrderTotalPrice;
	}

	public void setPurchaseOrderTotalPrice(Double purchaseOrderTotalPrice) {
		this.purchaseOrderTotalPrice = purchaseOrderTotalPrice;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "purchaseOrder")
	public Set<PurchaseOrderItem> getPurchaseOrderItems() {
		return this.purchaseOrderItems;
	}

	public void setPurchaseOrderItems(Set<PurchaseOrderItem> purchaseOrderItems) {
		this.purchaseOrderItems = purchaseOrderItems;
	}

}
