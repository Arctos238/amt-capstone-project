package ca.sait.amt.restapplication.service;

import java.util.ArrayList;

import org.springframework.web.multipart.MultipartFile;

import ca.sait.amt.restapplication.entity.Image;
import ca.sait.amt.restapplication.entity.Project;

public interface ImageService {
	public void saveImage(MultipartFile file, Project project);
	
	public void deleteImage(int imageId);
	
	public ArrayList<MultipartFile> getImages(Project project);
	
	public MultipartFile getImage(int imageId);
	
	public void storeImage(MultipartFile file, String filePath);
	
	public MultipartFile downloadImage();
	
	public ArrayList<MultipartFile> downloadImages();

}