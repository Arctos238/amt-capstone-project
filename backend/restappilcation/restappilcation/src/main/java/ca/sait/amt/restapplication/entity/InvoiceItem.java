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
 * InvoiceItem generated by hbm2java
 */
@Entity
@Table(name = "invoice_item", catalog = "amt")
public class InvoiceItem implements java.io.Serializable {

	private Integer invoiceItemId;
	private Invoice invoice;
	private String invoiceItemName;
	private String invoiceItemMeasurement;
	private double invoiceItemWidth;
	private double invoiceItemLength;
	private double invoiceItemArea;
	private double invoiceItemDepth;
	private double invoiceItemPrice;
	private EdgeProfile edgeProfile;
	private Set<InvoiceItemNote> invoiceItemNotes = new HashSet<InvoiceItemNote>(0);

	public InvoiceItem() {
	}

	public InvoiceItem(String invoiceItemName, double invoiceItemPrice) {
		this.invoiceItemName = invoiceItemName;
		this.invoiceItemPrice = invoiceItemPrice;
	}

	public InvoiceItem(Invoice invoice, String invoiceItemName, String invoiceItemMeasurement,
			double invoiceItemWidth, double invoiceItemLength, double invoiceItemArea, double invoiceItemDepth,
			double invoiceItemPrice, EdgeProfile edgeProfile, Set<InvoiceItemNote> invoiceItemNotes) {
		super();
		this.invoice = invoice;
		this.invoiceItemName = invoiceItemName;
		this.invoiceItemMeasurement = invoiceItemMeasurement;
		this.invoiceItemWidth = invoiceItemWidth;
		this.invoiceItemLength = invoiceItemLength;
		this.invoiceItemArea = invoiceItemArea;
		this.invoiceItemDepth = invoiceItemDepth;
		this.invoiceItemPrice = invoiceItemPrice;
		this.edgeProfile = edgeProfile;
		this.invoiceItemNotes = invoiceItemNotes;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "invoice_item_id", unique = true, nullable = false)
	public Integer getInvoiceItemId() {
		return this.invoiceItemId;
	}

	public void setInvoiceItemId(Integer invoiceItemId) {
		this.invoiceItemId = invoiceItemId;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JsonBackReference
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	@JoinColumn(name = "invoice_id")
	public Invoice getInvoice() {
		return this.invoice;
	}

	public void setInvoice(Invoice invoice) {
		this.invoice = invoice;
	}

	@Column(name = "invoice_item_name", nullable = false, length = 12)
	public String getInvoiceItemName() {
		return this.invoiceItemName;
	}

	public void setInvoiceItemName(String invoiceItemName) {
		this.invoiceItemName = invoiceItemName;
	}

	@Column(name = "invoice_item_price", nullable = false, precision = 8)
	public double getInvoiceItemPrice() {
		return this.invoiceItemPrice;
	}

	public void setInvoiceItemPrice(double invoiceItemPrice) {
		this.invoiceItemPrice = invoiceItemPrice;
	}
	
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "edge_profile_id")
	public EdgeProfile getEdgeProfile() {
		return edgeProfile;
	}
	
	public void setEdgeProfile(EdgeProfile edgeProfile) {
		this.edgeProfile = edgeProfile;
	}
	
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "invoiceItem", cascade= {CascadeType.MERGE, CascadeType.REMOVE})
	@JsonManagedReference
	public Set<InvoiceItemNote> getInvoiceItemNotes() {
		return this.invoiceItemNotes;
	}

	public void setInvoiceItemNotes(Set<InvoiceItemNote> invoiceItemNotes) {
		this.invoiceItemNotes = invoiceItemNotes;
	}
	
	@Column(name = "invoice_item_measurement")
	public String getInvoiceItemMeasurement() {
		return invoiceItemMeasurement;
	}

	public void setInvoiceItemMeasurement(String invoiceItemMeasurement) {
		this.invoiceItemMeasurement = invoiceItemMeasurement;
	}

	@Column(name = "invoice_item_width")
	public double getInvoiceItemWidth() {
		return invoiceItemWidth;
	}

	public void setInvoiceItemWidth(double invoiceItemWidth) {
		this.invoiceItemWidth = invoiceItemWidth;
	}

	@Column(name = "invoice_item_length")
	public double getInvoiceItemLength() {
		return invoiceItemLength;
	}

	public void setInvoiceItemLength(double invoiceItemLength) {
		this.invoiceItemLength = invoiceItemLength;
	}

	@Column(name = "invoice_item_area")
	public double getInvoiceItemArea() {
		return invoiceItemArea;
	}

	public void setInvoiceItemArea(double invoiceItemArea) {
		this.invoiceItemArea = invoiceItemArea;
	}

	@Column(name = "invoice_item_depth")
	public double getInvoiceItemDepth() {
		return invoiceItemDepth;
	}

	public void setInvoiceItemDepth(double invoiceItemDepth) {
		this.invoiceItemDepth = invoiceItemDepth;
	}

	@Transient
	public int getInvoiceId() {
		return this.invoice.getInvoiceId();
	}
	
}
