package ca.sait.amt.restapplication.service;

import java.util.ArrayList;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import ca.sait.amt.restapplication.entity.Image;
import ca.sait.amt.restapplication.entity.Project;

public interface ImageService {
	public void saveImage(MultipartFile file, Project project);
	
	public void deleteImage(int imageId);
	
	public Resource loadFile(int imageId);
}