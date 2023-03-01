package ca.sait.amt.restapplication.DAO;

import java.util.List;

import ca.sait.amt.restapplication.entity.Image;
import ca.sait.amt.restapplication.entity.Project;

public interface ImageDAO {
	public void saveImage(Image image);
	
	public void deleteImage(int imageId);
	
	public Image findImageById(int imageId);
	
	public List<Image> findImageByProject(Project project);
}
