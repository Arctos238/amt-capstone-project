package ca.sait.amt.restapplication.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.sait.amt.restapplication.entity.EdgeProfile;
import ca.sait.amt.restapplication.service.EdgeProfileService;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class EdgeProfileRestController {
	private EdgeProfileService ePS;
	
	@Autowired
	public EdgeProfileRestController(EdgeProfileService ePS) {
		this.ePS = ePS;
	}
	
	@GetMapping("/edgeprofiles")
	public List<EdgeProfile> findAll() {
		return ePS.findAll();
	}
	
	@GetMapping("/edgeprofiles/{id}")
	public EdgeProfile findById(@PathVariable int id) {
		return ePS.findById(id);
	}
	
	@PostMapping("/edgeprofiles") 
	public void createEdgeProfile(@RequestBody EdgeProfile edgeProfile) {
		edgeProfile.setEdgeProfileId(0);
		ePS.save(edgeProfile);
	}
	
	@PutMapping("edgeprofiles")
	public void updateEdgeProfile(@RequestBody EdgeProfile edgeProfile) {
		ePS.save(edgeProfile);
	}
	
	@DeleteMapping("/edgeprofiles/{id}")
	public void delete(@PathVariable int id) {
		ePS.delete(id);
	}
}
