package ca.sait.amt.restapplication.service;

import java.util.List;

import ca.sait.amt.restapplication.entity.InvoiceItem;

public interface InvoiceItemService {
	public List<InvoiceItem> findAll();

	public List<InvoiceItem> findInvoiceItemByInvoiceId(int invoiceId);

	public InvoiceItem findByInvoiceItemId(int invoiceItemId);

	public void deleteInvoiceItem(int invoiceItemId);

	public void saveInvoiceItem(InvoiceItem invoiceItem);
}
