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
import ca.sait.amt.restapplication.entity.InvoiceItem;
import ca.sait.amt.restapplication.service.InvoiceItemService;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class InvoiceItemRestController {
	private InvoiceItemService invoiceItemService;
	
	@Autowired
	public InvoiceItemRestController(InvoiceItemService invoiceItemService) {
		this.invoiceItemService = invoiceItemService;
	}
	
	@GetMapping("/invoiceitems")
	public List<InvoiceItem> getAll() {
		return invoiceItemService.findAll();
	}
	
	@GetMapping("/invoiceitems/{invoiceId}") 
	public List<InvoiceItem> getInvoicesByInvoiceId(@PathVariable int invoiceId) {	
		return invoiceItemService.findInvoiceItemByInvoiceId(invoiceId);
	}
	
	@GetMapping("/invoiceitems/id/{invoiceItemId}")
	public InvoiceItem getInvoiceByInvoiceId(@PathVariable int invoiceItemId) {
		return invoiceItemService.findByInvoiceItemId(invoiceItemId);
	}
	
	@PostMapping("/invoiceitems")
	public void addInvoice(@RequestBody InvoiceItem invoiceItem) {
		invoiceItem.setInvoiceItemId(0);
		invoiceItemService.saveInvoiceItem(invoiceItem);
	}
	
	@PutMapping("/invoiceitems")
	public void saveInvoice(@RequestBody InvoiceItem invoiceItem) {
		invoiceItemService.saveInvoiceItem(invoiceItem);
	}
	
	@DeleteMapping("/invoiceitems/id/{invoiceItemId}")
	public void deleteInvoice(@PathVariable int invoiceItemId) {
		invoiceItemService.deleteInvoiceItem(invoiceItemId);
	}
}
