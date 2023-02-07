package ca.sait.amt.restapplication.service;

import java.util.List;

import ca.sait.amt.restapplication.entity.EdgeProfile;

public interface EdgeProfileService {
	public void save(EdgeProfile edgeProfile);
	
	public void delete(int id);
	
	public List<EdgeProfile> findAll();
	
	public EdgeProfile findById(int id);
}
