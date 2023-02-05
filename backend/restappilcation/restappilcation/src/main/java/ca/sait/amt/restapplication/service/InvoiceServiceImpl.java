package ca.sait.amt.restapplication.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ca.sait.amt.restapplication.DAO.InvoiceDAO;
import ca.sait.amt.restapplication.entity.Invoice;

@Service
public class InvoiceServiceImpl implements InvoiceService {
	private InvoiceDAO invoiceDAO;

	@Autowired
	public InvoiceServiceImpl(InvoiceDAO invoiceDAO) {
		this.invoiceDAO = invoiceDAO;
	}

	@Override
	@Transactional
	public List<Invoice> findAll() {
		return invoiceDAO.findAll();
	}

	@Override
	@Transactional
	public List<Invoice> findInvoiceByProjectName(String projectName) {
		return invoiceDAO.findInvoiceByProjectName(projectName);
	}

	@Override
	@Transactional
	public Invoice findByInvoiceId(int invoiceId) {
		return invoiceDAO.findInvoiceById(invoiceId);	
				}

	@Override
	@Transactional
	public void deleteInvoice(int invoiceId) {
		invoiceDAO.deleteInvoice(invoiceId);
	}

	@Override
	@Transactional
	public void saveInvoice(Invoice invoice) {
		invoiceDAO.saveInvoice(invoice);
	}

}
