package ca.sait.amt.restapplication.DAO;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import ca.sait.amt.restapplication.entity.Client;
import ca.sait.amt.restapplication.entity.Image;
import ca.sait.amt.restapplication.entity.Project;
import jakarta.persistence.EntityManager;

@Repository
public class ImageDAOHibernateImpl implements ImageDAO {
	private EntityManager entityManager;
	
	@Autowired
	public ImageDAOHibernateImpl(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	public void saveImage(Image image) {
		Session currentSession = entityManager.unwrap(Session.class);

		if (image.getImageId() == 0) {
			currentSession.save(image);
		}

		currentSession.merge(image);
	}

	@Override
	public void deleteImage(int imageId) {
		Session currentSession = entityManager.unwrap(Session.class);

		currentSession.remove(findImageById(imageId));
	}

	@Override
	public Image findImageById(int imageId) {
		Session currentSession = entityManager.unwrap(Session.class);		
		return currentSession.find(Image.class, imageId);
	
	}

	@Override
	public List<Image> findImageByProject(Project project) {
		Session currentSession = entityManager.unwrap(Session.class);		
		
		try {
			Query<Image> query = currentSession.createQuery("FROM Image I WHERE I.project =:project", Image.class);
			
			query.setParameter("project", project);
			
			List<Image> images = null;
			
			images = query.getResultList();
			
			return images;
		} catch (Exception ex) {
			currentSession.close();
		}

		return null;
		
	}



}
