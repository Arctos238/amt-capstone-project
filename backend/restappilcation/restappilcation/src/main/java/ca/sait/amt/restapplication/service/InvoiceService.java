package ca.sait.amt.restapplication.service;

import java.util.List;

import ca.sait.amt.restapplication.entity.Invoice;

public interface InvoiceService {
	public List<Invoice> findAll();
	
	public List<Invoice> findInvoiceByProjectName(String projectName);

	public Invoice findByInvoiceId(int invoiceId);

	public void deleteInvoice(int invoiceId);

	public void saveInvoice(Invoice invoice);
}
