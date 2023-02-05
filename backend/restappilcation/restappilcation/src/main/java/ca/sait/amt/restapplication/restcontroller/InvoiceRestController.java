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

import ca.sait.amt.restapplication.entity.Invoice;
import ca.sait.amt.restapplication.service.InvoiceService;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class InvoiceRestController {
	private InvoiceService invoiceService;
	
	@Autowired
	public InvoiceRestController(InvoiceService invoiceService) {
		this.invoiceService = invoiceService;
	}
	
	@GetMapping("/invoices")
	public List<Invoice> getAll() {
		return invoiceService.findAll();
	}
	
	@GetMapping("/invoices/{projectName}") 
	public List<Invoice> getInvoicesByProjectName(@PathVariable String projectName) {	
		return invoiceService.findInvoiceByProjectName(projectName);
	}
	
	@GetMapping("/invoices/id/{invoiceId}")
	public Invoice getInvoiceByInvoiceId(@PathVariable int invoiceId) {
		return invoiceService.findByInvoiceId(invoiceId);
	}
	
	@PostMapping("/invoices")
	public void addInvoice(@RequestBody Invoice invoice) {
		invoice.setInvoiceId(0);
		invoiceService.saveInvoice(invoice);
	}
	
	@PutMapping("/invoices")
	public void saveInvoice(@RequestBody Invoice invoice) {
		invoiceService.saveInvoice(invoice);
	}
	
	@DeleteMapping("/invoices/id/{invoiceId}")
	public void deleteInvoice(@PathVariable int invoiceId) {
		invoiceService.deleteInvoice(invoiceId);
	}
}
