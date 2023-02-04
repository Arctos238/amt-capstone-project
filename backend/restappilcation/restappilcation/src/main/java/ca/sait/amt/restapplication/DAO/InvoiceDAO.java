package ca.sait.amt.restapplication.DAO;

import java.util.List;

import ca.sait.amt.restapplication.entity.Invoice;

public interface InvoiceDAO {

	void deleteInvoice(int invoiceId);

	void saveInvoice(Invoice invoice);

	Invoice findInvoiceById(int invoiceId);

	List<Invoice> findInvoiceByProjectName(String projectName);

	List<Invoice> findAll();

}
