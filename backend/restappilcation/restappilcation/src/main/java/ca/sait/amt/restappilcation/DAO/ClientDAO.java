package ca.sait.amt.restappilcation.DAO;

import java.util.List;

import ca.sait.amt.restappilcation.entity.Client;

public interface ClientDAO {
	
	public List<Client> findAll();
	
	public Client findClientByName(String clientName);
	
	public Client findClientById(Client clientId);

	public void saveClient(Client client);

	public void deleteClient(Client client);
}
