package ca.sait.amt.restappilcation.DAO;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Repository;

import ca.sait.amt.restappilcation.entity.Employee;
import jakarta.persistence.EntityManager;

@Repository
public class EmployeeDAOHibernateImpl implements EmployeeDAO {

	private EntityManager entityManager;

	@Autowired
	public EmployeeDAOHibernateImpl(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	public List<Employee> findAll() {
		Session currentSession = entityManager.unwrap(Session.class);

		Query<Employee> query = currentSession.createQuery("from Employee", Employee.class);

		List<Employee> employees = query.getResultList();

		return employees;
	}

	@SuppressWarnings("deprecation")
	@Override
	public void saveEmployee(Employee employee) {
		Session currentSession = entityManager.unwrap(Session.class);
		
		if(employee.getEmployeeId() == 0) {
			currentSession.save(employee);
		}
		
		

	}

	@Override
	public Employee findEmployeeByUsername(String username) {
		Session currentSession = entityManager.unwrap(Session.class);

		
		try {
			Query<Employee> query = currentSession.createQuery("FROM Employee E WHERE E.employeeUsername =:userName", Employee.class);
			
			query.setParameter("userName", username);
			
			Employee employee = null;
			
			employee = query.getSingleResult();
			
			return employee;
		} catch (Exception ex) {
			currentSession.close();
		}

		return null;
	}

	@Override
	public void deleteEmployee(String username) {
		Session currentSession = entityManager.unwrap(Session.class);
		
		Employee employee = findEmployeeByUsername(username);
		
		currentSession.remove(employee);
		
	}

}
