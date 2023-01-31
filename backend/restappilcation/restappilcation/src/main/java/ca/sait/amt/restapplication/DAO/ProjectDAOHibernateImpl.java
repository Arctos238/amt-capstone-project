package ca.sait.amt.restapplication.DAO;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import ca.sait.amt.restapplication.entity.Project;
import jakarta.persistence.EntityManager;

@Repository
public class ProjectDAOHibernateImpl implements ProjectDAO{
	private EntityManager entityManager;
	
	@Autowired
	public ProjectDAOHibernateImpl(EntityManager entityManager) {
		this.entityManager = entityManager;
	}
	
	@Override
	public List<Project> findAll() {
		Session session = entityManager.unwrap(Session.class);
		
		Query<Project> query = session.createQuery("from Project", Project.class);
		
		return query.getResultList();
	}

	@Override
	public List<Project> findProjectsByClientId(int id) {
		Session session = entityManager.unwrap(Session.class);
		
		Query<Project> query = session.createQuery("FROM Project p WHERE p.client.clientId =:id",
				Project.class);

		query.setParameter("id", id);

		return  query.getResultList();
		
	}

	@Override
	public Project findProjectByProjectId(int id) {
		Session session = entityManager.unwrap(Session.class);
		
		return session.find(Project.class, id);
		
	}

	@Override
	public void saveProject(Project project) {
		Session currentSession = entityManager.unwrap(Session.class);

		if (project.getProjectId() == 0) {
			currentSession.save(project);
		} else {
			currentSession.merge(project);
		}


		
	}

	@Override
	public void deleteProject(int id) {
		Session currentSession = entityManager.unwrap(Session.class);
		
		currentSession.remove(findProjectByProjectId(id));
		
	}
	
}
