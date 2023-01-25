package ca.sait.amt.restapplication.service;

import java.util.List;

import ca.sait.amt.restapplication.entity.Employee;

public interface EmployeeService {
	
	public List<Employee> findAll();
	
	public Employee findByUsername(String userName);
	
	public void deleteByUsername(String Username);
	
	public void saveEmployee(Employee employee);
}
