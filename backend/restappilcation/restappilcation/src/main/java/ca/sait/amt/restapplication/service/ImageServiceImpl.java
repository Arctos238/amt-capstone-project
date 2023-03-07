package ca.sait.amt.restapplication.service;


import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import ca.sait.amt.restapplication.DAO.ImageDAO;
import ca.sait.amt.restapplication.entity.Image;
import ca.sait.amt.restapplication.entity.Project;
 

@Service
public class ImageServiceImpl implements ImageService{
	
	private final String DEFAULT_FILE_DIR = "C:/amt-files";
    private final Path fileStorageLocation;


    ImageDAO imageDAO;

    @Autowired
    public ImageServiceImpl(ImageDAO imageDAO) {
    	this.imageDAO = imageDAO;
    	
        this.fileStorageLocation = Paths.get(DEFAULT_FILE_DIR);

        try {

            Files.createDirectories(this.fileStorageLocation);

        } catch (Exception ex) {

        	System.out.println();
        }
    }

	@Override
	@Transactional
	public void saveImage(MultipartFile file, Project project) {
		new File("/" + DEFAULT_FILE_DIR + "/" + project.getProjectId() + "-" + project.getProjectName().replaceAll("\\s+","-")  + "/").mkdir();
		
		String filePath = DEFAULT_FILE_DIR + "/" + project.getProjectId() + "-" + project.getProjectName().replaceAll("\\s+","-") + "/" + file.getOriginalFilename();
		Image image = new Image(project, file.getContentType(), file.getOriginalFilename(), filePath , file.getOriginalFilename().split("\\.")[1], file.getSize());
		image.setImageId(0);
		
		imageDAO.saveImage(image);
		storeImage(file, filePath);
	}

	@Override
	@Transactional
	public void deleteImage(int imageId) {
		Image image = imageDAO.findImageById(imageId);
		 File file
         = new File(image.getImageUrl());
		 
		file.delete();
		
		imageDAO.deleteImage(imageId);
		
	}


	private void storeImage(MultipartFile file, String filePath) {
		
		Path targetLocation = Paths.get(filePath);
		System.out.println(filePath);
        try {
			Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Override
	@Transactional
    public Resource loadFile(int imageId){
		Image image = imageDAO.findImageById(imageId);
		
        try {
          Path file = Paths.get(image.getImageUrl());
          Resource resource = new UrlResource(file.toUri());

          if (resource.exists() || resource.isReadable()) {
              return resource;
          } 
          else {
              throw new FileNotFoundException("Could not find file");
          }
        } 
        catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}      
        
        return null;
    }
}
           