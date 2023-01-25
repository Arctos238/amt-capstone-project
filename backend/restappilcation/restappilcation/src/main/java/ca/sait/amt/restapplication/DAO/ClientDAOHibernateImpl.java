package ca.sait.amt.restapplication.DAO;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import ca.sait.amt.restapplication.entity.Client;
import ca.sait.amt.restapplication.entity.Employee;
import jakarta.persistence.EntityManager;

@Repository
public class ClientDAOHibernateImpl implements ClientDAO{
	private EntityManager entityManager;
	
	@Autowired
	public ClientDAOHibernateImpl(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	public List<Client> findAll() {
		Session currentSession = entityManager.unwrap(Session.class);
		
		Query<Client> query = currentSession.createQuery("from Client", Client.class);

		List<Client> clients = query.getResultList();

		return clients;
	}

	@Override
	public List<Client> findClientByName(String clientName) {
		Session currentSession = entityManager.unwrap(Session.class);
		
		try {
			Query<Client> query = currentSession.createQuery("FROM Client E WHERE E.clientFirstName =:clientName", Client.class);
			
			query.setParameter("clientName", clientName);
			
			List<Client> clients = null;
			
			clients = query.getResultList();
			
			return clients;
		} catch (Exception ex) {
			currentSession.close();
		}

		return null;
	}

	@Override
	public Client findClientById(int clientId) {
		Session currentSession = entityManager.unwrap(Session.class);
		
		return currentSession.find(Client.class, clientId);
	}

	@Override
	public void saveClient(Client client) {
		Session currentSession = entityManager.unwrap(Session.class);

		if (client.getClientId() == 0) {
			currentSession.save(client);
		}

		currentSession.merge(client);
	}

	@Override
	public void deleteClient(int clientId) {
		Session currentSession = entityManager.unwrap(Session.class);

		currentSession.remove(findClientById(clientId));
		
	}

}
