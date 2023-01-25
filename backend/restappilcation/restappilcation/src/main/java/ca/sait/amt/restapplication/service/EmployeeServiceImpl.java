package ca.sait.amt.restapplication.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ca.sait.amt.restapplication.DAO.EmployeeDAO;
import ca.sait.amt.restapplication.entity.Employee;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	private EmployeeDAO employeeDAO;
	
	@Autowired
	public EmployeeServiceImpl(EmployeeDAO employeeDAO) {
		this.employeeDAO  = employeeDAO;
	}
	
	@Override
	@Transactional
	public List<Employee> findAll() {
		return employeeDAO.findAll();
	}

	
	@Override
	@Transactional
	public void saveEmployee(Employee employee) {
		employeeDAO.saveEmployee(employee);
	}

	@Override
	@Transactional
	public Employee findByUsername(String userName) {
		return employeeDAO.findEmployeeByUsername(userName);
	}

	@Override
	@Transactional
	public void deleteByUsername(String username) {
		employeeDAO.deleteEmployee(username);
	}

}
