package ca.sait.amt.restapplication.entity;

import static jakarta.persistence.GenerationType.IDENTITY;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "invoice_item_note", catalog = "amt")
public class InvoiceItemNote implements java.io.Serializable{

	private Integer invoiceItemNoteId;
	private String invoiceItemNote;
	private InvoiceItem invoiceItem;
	
	public InvoiceItemNote() {
		
	}
	
	public InvoiceItemNote(String edgeProfileName, InvoiceItem invoiceItem) {
		this.invoiceItemNote = edgeProfileName;
		this.invoiceItem = invoiceItem;
	}
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "invoice_item_note_id", unique = true, nullable = false)
	public Integer getInvoiceItemNoteId() {
		return this.invoiceItemNoteId;
	}

	public void setInvoiceItemNoteId(Integer invoiceItemNoteId) {
		this.invoiceItemNoteId = invoiceItemNoteId;
	}
	
	@Column(name = "invoice_item_note")
	public String getInvoiceItemNote() {
		return this.invoiceItemNote;
	}
	
	public void setInvoiceItemNote(String invoiceItemNote) {
		this.invoiceItemNote = invoiceItemNote;
	}
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JsonBackReference
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
	@JoinColumn(name = "invoice_item_id")
	public InvoiceItem getInvoiceItem() {
		return this.invoiceItem;
	}
	
	public void setInvoiceItem(InvoiceItem invoiceItem) {
		this.invoiceItem = invoiceItem;
	}
}
