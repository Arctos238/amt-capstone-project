package ca.sait.amt.restapplication.DAO;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import ca.sait.amt.restapplication.entity.Client;
import ca.sait.amt.restapplication.entity.EdgeProfile;
import jakarta.persistence.EntityManager;

@Repository
public class EdgeProfileDAOHibernateImpl implements EdgeProfileDAO {
	private EntityManager entityManager;

	@Autowired
	public EdgeProfileDAOHibernateImpl(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	public List<EdgeProfile> findAll() {
		Session currentSession = entityManager.unwrap(Session.class);

		Query<EdgeProfile> query = currentSession.createQuery("from EdgeProfile", EdgeProfile.class);

		List<EdgeProfile> edgeProfiles = query.getResultList();

		return edgeProfiles;
	}

	@Override
	public void deleteById(int id) {
		Session currentSession = entityManager.unwrap(Session.class);
		
		
		EdgeProfile edgeProfile = findById(id);
		
		if(edgeProfile != null) {
			currentSession.remove(edgeProfile);
		}
		
	}

	@Override
	public EdgeProfile findById(int id) {
		Session currentSession = entityManager.unwrap(Session.class);

		return currentSession.find(EdgeProfile.class, id);
	}

	@SuppressWarnings("deprecation")
	@Override
	public void save(EdgeProfile edgeProfile) {
		Session currentSession = entityManager.unwrap(Session.class);

		if (edgeProfile.getEdgeProfileId() == 0) {
			currentSession.save(edgeProfile);
		} else {
			currentSession.merge(edgeProfile);
		}
	}

}
