package ca.sait.amt.restapplication.DAO;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import ca.sait.amt.restapplication.entity.Client;
import ca.sait.amt.restapplication.entity.Invoice;
import jakarta.persistence.EntityManager;

@Repository
public class InvoiceDAOHibernateImpl implements InvoiceDAO{
	private EntityManager entityManager;
	
	@Autowired
	public InvoiceDAOHibernateImpl(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	public List<Invoice> findAll() {
		Session currentSession = entityManager.unwrap(Session.class);
		
		Query<Invoice> query = currentSession.createQuery("from Invoice", Invoice.class);

		List<Invoice> invoices = query.getResultList();

		return invoices;
	}

	@Override
	public List<Invoice> findInvoiceByProjectName(String projectName) {
		Session currentSession = entityManager.unwrap(Session.class);
		
		try {
			Query<Invoice> query = currentSession.createQuery("FROM Invoice I WHERE I.projectName =:projectName", Invoice.class);
			
			query.setParameter("projectName", projectName);
			
			List<Invoice> invoices = null;
			
			invoices = query.getResultList();
			
			return invoices;
		} catch (Exception ex) {
			currentSession.close();
		}

		return null;
	}

	@Override
	public Invoice findInvoiceById(int invoiceId) {
		Session currentSession = entityManager.unwrap(Session.class);
		
		return currentSession.find(Invoice.class, invoiceId);
	}

	@Override
	public void saveInvoice(Invoice invoice) {
		Session currentSession = entityManager.unwrap(Session.class);

		if (invoice.getInvoiceId() == 0) {
			currentSession.save(invoice);
		}

		currentSession.merge(invoice);
	}

	@Override
	public void deleteInvoice(int invoiceId) {
		Session currentSession = entityManager.unwrap(Session.class);

		currentSession.remove(findInvoiceById(invoiceId));
		
	}

}
