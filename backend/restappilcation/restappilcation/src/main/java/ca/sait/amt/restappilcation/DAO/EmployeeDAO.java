package ca.sait.amt.restappilcation.DAO;

import java.util.List;

import ca.sait.amt.restappilcation.entity.Employee;

public interface EmployeeDAO {
	
	public List<Employee> findAll();
	
	public Employee findEmployeeByID(int theId);

	public void saveEmployee(Employee theCustomer);

	public void deleteEmployee(int theId);
}
