package ca.sait.amt.restapplication.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ca.sait.amt.restapplication.DAO.InvoiceItemDAO;
import ca.sait.amt.restapplication.entity.InvoiceItem;


@Service
public class InvoiceItemServiceImpl implements InvoiceItemService{
	private InvoiceItemDAO invoiceItemDAO;
	
	@Autowired
	public InvoiceItemServiceImpl(InvoiceItemDAO invoiceItemDAO) {
		this.invoiceItemDAO  = invoiceItemDAO;
	}
	
	@Override
	@Transactional
	public List<InvoiceItem> findAll() {
		return invoiceItemDAO.findAll();
	}

	@Override
	@Transactional
	public List<InvoiceItem> findInvoiceItemByInvoiceId(int invoiceId) {
		return invoiceItemDAO.findInvoiceItemByInvoiceId(invoiceId);
	}

	@Override
	@Transactional
	public InvoiceItem findByInvoiceItemId(int invoiceItemId) {
		return invoiceItemDAO.findInvoiceItemById(invoiceItemId);
	}

	@Override
	@Transactional
	public void deleteInvoiceItem(int invoiceItemId) {
		invoiceItemDAO.deleteInvoiceItem(invoiceItemId);
	}

	@Override
	@Transactional
	public void saveInvoiceItem(InvoiceItem invoiceItem) {
		invoiceItemDAO.saveInvoiceItem(invoiceItem);
	}

}
