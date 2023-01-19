package ca.sait.amt.restappilcation.service;

import java.util.List;

import ca.sait.amt.restappilcation.entity.Employee;

public interface EmployeeService {
	
	public List<Employee> findAll();
	
	public Employee findById(int Id);
	
	public void deleteById(int Id);
	
	public void saveEmployee(Employee employee);
}
