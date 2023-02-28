package ca.sait.amt.restapplication.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import ca.sait.amt.restapplication.entity.Project;
import ca.sait.amt.restapplication.service.ImageService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class ImageRestController {
	private ImageService imageService;
	
	@Autowired
	public ImageRestController(ImageService imageService) {
		this.imageService = imageService;
	}
	
	@PostMapping("/images")
	public void uploadFile(@RequestParam("file") MultipartFile file) {
		imageService.saveImage(file, new Project());
	}
}
