package ca.sait.amt.restappilcation.service;

import java.util.List;

import ca.sait.amt.restappilcation.entity.Employee;

public interface EmployeeService {
	
	public List<Employee> findAll();
	
	public Employee findByUsername(String userName);
	
	public void deleteByUsername(String Username);
	
	public void saveEmployee(Employee employee);
}
