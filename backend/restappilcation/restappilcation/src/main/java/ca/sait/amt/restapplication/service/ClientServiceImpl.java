package ca.sait.amt.restapplication.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ca.sait.amt.restapplication.DAO.ClientDAO;
import ca.sait.amt.restapplication.entity.Client;

@Service
public class ClientServiceImpl implements ClientService{
	ClientDAO clientDAO;
	
	@Autowired
	public ClientServiceImpl(ClientDAO clientDAO) {
		this.clientDAO = clientDAO;
	}
	
	@Override
	@Transactional
	public List<Client> findAll() {
		return clientDAO.findAll();
	}

	@Override
	@Transactional
	public Client findByClientId(int clientId) {
		return clientDAO.findClientById(clientId);
	}

	@Override
	@Transactional
	public List<Client> findByClientName(String clientName) {
		return clientDAO.findClientByName(clientName);
	}

	@Override
	@Transactional
	public void deleteByClientId(int clientId) {
		clientDAO.deleteClient(clientId);
	}

	@Override
	@Transactional
	public void saveClient(Client client) {
		clientDAO.saveClient(client);
	}
	
}
