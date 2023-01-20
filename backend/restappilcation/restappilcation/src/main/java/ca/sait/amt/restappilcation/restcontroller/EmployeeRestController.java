package ca.sait.amt.restappilcation.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.sait.amt.restappilcation.entity.Employee;
import ca.sait.amt.restappilcation.exceptions.EmployeeNotFoundException;
import ca.sait.amt.restappilcation.service.EmployeeService;

@RestController
@RequestMapping("/api")
public class EmployeeRestController {
	
	private EmployeeService employeeService;
	
	@Autowired
	public EmployeeRestController(EmployeeService employeeService) {
		this.employeeService = employeeService;
	}
	
	@GetMapping("/employees")
	public List<Employee> getEmployees() {
		return employeeService.findAll();
	}
	
//	@GetMapping("/employees/{employeeId}")
//	public Employee getEmployees(@PathVariable int employeeId) {
//		Employee employee = employeeService.findById(employeeId);;
//		
//		if (employee == null) {
//			throw new RuntimeException("Employee id not found - " + employeeId);
//		};
//		
//		return employee;
//	}
	
	@GetMapping("/employees/{employeeUsername}")
	public Employee getEmployees(@PathVariable String employeeUsername) {
		Employee employee = employeeService.findByUsername(employeeUsername);;
		
		if (employee == null) {
			throw new EmployeeNotFoundException("Employee id not found - " + employeeUsername);
		};
		
		return employee;
	}
	
	@PostMapping("/employees")
	public void addEmployee(@RequestBody Employee employee) {
		employeeService.saveEmployee(employee);
	}
	
	@PutMapping("/employees")
	public void updateEmployee(@RequestBody Employee employee) {
		employeeService.saveEmployee(employee);
	}
	
	@DeleteMapping("/employees/{employeeUsername}")
	public void deleteEmployee(@PathVariable String employeeUsername) {
		if (employeeService.findByUsername(employeeUsername) == null) {
			throw new EmployeeNotFoundException("Employee id not found - " + employeeUsername);
		};
		
		employeeService.deleteByUsername(employeeUsername);
	}
	
}
