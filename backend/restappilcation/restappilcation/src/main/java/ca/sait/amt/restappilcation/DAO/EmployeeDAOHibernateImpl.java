package ca.sait.amt.restappilcation.DAO;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
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

	@Override
	public void deleteEmployee(int theId) {
		Session currentSession = entityManager.unwrap(Session.class);
		
		Employee employee = findEmployeeByID(theId);
		
		currentSession.remove(employee);
	}

	@Override
	public Employee findEmployeeByID(int theId) {
		Session currentSession = entityManager.unwrap(Session.class);

		Employee employee = currentSession.get(Employee.class, theId);

		return employee;
	}

	@SuppressWarnings("deprecation")
	@Override
	public void saveEmployee(Employee theCustomer) {
		Session currentSession = entityManager.unwrap(Session.class);

		currentSession.saveOrUpdate(theCustomer);
	}

}
