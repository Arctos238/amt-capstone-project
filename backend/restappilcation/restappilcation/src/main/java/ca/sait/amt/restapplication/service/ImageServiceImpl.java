package ca.sait.amt.restapplication.service;


import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
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

    
    @Autowired
    ImageDAO imageDAO;

    @Autowired
    public ImageServiceImpl(ImageDAO imageDAO) {
    	
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
		Image image = new Image(project, file.getContentType(), file.getName(), filePath , file.getOriginalFilename().split("\\.")[1], file.getSize());
		image.setImageId(0);
		
		imageDAO.saveImage(image);
		storeImage(file, filePath);
	}

	@Override
	public void deleteImage(int imageId) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public ArrayList<MultipartFile> getImages(Project project) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public MultipartFile getImage(int imageId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void storeImage(MultipartFile file, String filePath) {
		
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
	public MultipartFile downloadImage() {
		
		return null;
	}

	@Override
	public ArrayList<MultipartFile> downloadImages() {
		// TODO Auto-generated method stub
		return null;
	}

}
           