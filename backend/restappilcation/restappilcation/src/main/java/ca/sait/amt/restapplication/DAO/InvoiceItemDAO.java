package ca.sait.amt.restapplication.DAO;

import java.util.List;

import ca.sait.amt.restapplication.entity.Invoice;
import ca.sait.amt.restapplication.entity.InvoiceItem;

public interface InvoiceItemDAO {

	public void deleteInvoiceItem(int invoiceItemId);

	public void saveInvoiceItem(InvoiceItem invoiceItem);

	public InvoiceItem findInvoiceItemById(int invoiceId);

	public List<InvoiceItem> findInvoiceItemByInvoiceId(int id);

	public List<InvoiceItem> findAll();
}
