package ca.sait.amt.restapplication.DAO;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import ca.sait.amt.restapplication.entity.Invoice;
import ca.sait.amt.restapplication.entity.InvoiceItem;
import jakarta.persistence.EntityManager;

@Repository
public class InvoiceItemDAOHibernateImpl implements InvoiceItemDAO {
	private EntityManager entityManager;
	
	@Autowired
	public InvoiceItemDAOHibernateImpl(EntityManager entityManager) {
		this.entityManager = entityManager;
	}
	
	@Override
	public void deleteInvoiceItem(int invoiceItemId) {
		Session currentSession = entityManager.unwrap(Session.class);

		currentSession.remove(findInvoiceItemById(invoiceItemId));
	}

	@Override
	public void saveInvoiceItem(InvoiceItem invoiceItem) {
		Session currentSession = entityManager.unwrap(Session.class);

		if (invoiceItem.getInvoiceItemId() == 0) {
			currentSession.save(invoiceItem);
		}

		currentSession.merge(invoiceItem);
	}

	@Override
	public InvoiceItem findInvoiceItemById(int invoiceItemId) {
		Session currentSession = entityManager.unwrap(Session.class);
		
		return currentSession.find(InvoiceItem.class, invoiceItemId);
	}

	@Override
	public List<InvoiceItem> findInvoiceItemByInvoiceId(int invoiceId) {
		Session currentSession = entityManager.unwrap(Session.class);
		
		
		
		try {
			Query<InvoiceItem> query = currentSession.createQuery("FROM InvoiceItem I WHERE I.invoiceId =:invoiceId", InvoiceItem.class);
			
			query.setParameter("invoiceId", invoiceId);
			
			List<InvoiceItem> invoiceItems = null;
			
			invoiceItems = query.getResultList();
			
			System.out.println(invoiceItems);
			
			return invoiceItems;
		} catch (Exception ex) {
			currentSession.close();
		}

		return null;
	}

	@Override
	public List<InvoiceItem> findAll() {
		Session currentSession = entityManager.unwrap(Session.class);
		
		Query<InvoiceItem> query = currentSession.createQuery("from InvoiceItem", InvoiceItem.class);

		List<InvoiceItem> invoiceItems = query.getResultList();

		return invoiceItems;
	}

}
