package ca.sait.amt.restapplication.service;

import java.util.List;

import ca.sait.amt.restapplication.entity.Client;

public interface ClientService {
	
	public List<Client> findAll();
	
	public Client findByClientId(int clientId);
	
	public List<Client> findByClientName(String clientName);
	
	public void deleteByClientId(int clientId);
	
	public void saveClient(Client client);
}
