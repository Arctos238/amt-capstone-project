package ca.sait.amt.restapplication.restcontroller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import ca.sait.amt.restapplication.service.ImageService;
import ca.sait.amt.restapplication.service.ProjectService;
import jakarta.servlet.http.HttpServletRequest;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class ImageRestController {
	private ImageService imageService;
	private ProjectService projectService;
	
	@Autowired
	public ImageRestController(ImageService imageService, ProjectService projectService) {
		this.imageService = imageService;
		this.projectService = projectService;
	}
	
	@PostMapping("/images")
	public void uploadFile(@RequestParam("file") MultipartFile file, @RequestParam("projectId") int projectId) {
		imageService.saveImage(file, projectService.findByProjectId(projectId));
	}
	
	@DeleteMapping("/images/id/{imageId}") 
	public void deleteFile(@PathVariable("imageId") int imageId) {
		imageService.deleteImage(imageId);
	}
	
	@GetMapping("/images/id/{imageId}")
	public ResponseEntity<Resource> getImage(@PathVariable("imageId") int imageId,  HttpServletRequest request) {
		Resource resource = imageService.loadFile(imageId);
		
		// Try to determine file's content type
        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        } catch (IOException ex) {
            
        }

        // Fallback to the default content type if type could not be determined
        if(contentType == null) {
            contentType = "application/octet-stream";
        }
		
		return ResponseEntity.ok()
				.contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
	}
}
