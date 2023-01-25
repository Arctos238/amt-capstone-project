package ca.sait.amt.restapplication.DAO;

import java.util.List;

import ca.sait.amt.restapplication.entity.Client;

public interface ClientDAO {
	
	public List<Client> findAll();
	
	public List<Client> findClientByName(String clientName);
	
	public Client findClientById(int clientId);

	public void saveClient(Client client);

	public void deleteClient(int clientId);

}
