package ca.sait.amt.restapplication.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.sait.amt.restapplication.entity.Client;
import ca.sait.amt.restapplication.exceptions.ClientNotFoundException;
import ca.sait.amt.restapplication.exceptions.EmployeeNotFoundException;
import ca.sait.amt.restapplication.service.ClientService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class ClientRestController {
	private ClientService clientService;
	
	@Autowired
	public ClientRestController(ClientService clientService) {
		this.clientService = clientService;
	}
	
	@GetMapping("/clients")
	public List<Client> getClients(){
		return clientService.findAll();
	}
	
	@GetMapping("/clients/{clientFirstName}")
	public List<Client> getClients(@PathVariable String clientFirstName) {
		List <Client> clients = clientService.findByClientName(clientFirstName);;
		
		if (clients.size() == 0) {
			throw new ClientNotFoundException("No Clients found with that first name - " + clientFirstName);
		};
		
		return clients;
	}
	
	@GetMapping("/clients/id/{clientId}")
	public Client getClientById(@PathVariable int clientId) {
		Client client = clientService.findByClientId(clientId);;
		
		if (client == null) {
			throw new ClientNotFoundException("No Clients found with that client id - " + clientId);
		};
		
		return client;
	}
	
	@PostMapping("/clients")
	public void addClient(@RequestBody Client client) {
		client.setClientId(0);
		clientService.saveClient(client);
		
	}
	
	@PutMapping("/clients")
	public void updateClient(@RequestBody Client client) {
		clientService.saveClient(client);
	}
	
	@DeleteMapping("/clients/id/{clientsId}")
	public void updateClient(@PathVariable int clientId) {
		if (clientService.findByClientId(clientId) == null) {
			throw new ClientNotFoundException("No Clients found with that client id - " + clientId);
		};
		
		clientService.deleteByClientId(clientId);
	}
}
