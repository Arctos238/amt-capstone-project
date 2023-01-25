package ca.sait.amt.restapplication.DAO;

import java.util.List;

import ca.sait.amt.restapplication.entity.Employee;

public interface EmployeeDAO {
	
	public List<Employee> findAll();
	
	public Employee findEmployeeByUsername(String userName);

	public void saveEmployee(Employee employee);

	public void deleteEmployee(String userName);
}
