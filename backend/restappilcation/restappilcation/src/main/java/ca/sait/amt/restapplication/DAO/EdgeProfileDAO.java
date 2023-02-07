package ca.sait.amt.restapplication.DAO;

import java.util.List;

import ca.sait.amt.restapplication.entity.EdgeProfile;

public interface EdgeProfileDAO {
	public List<EdgeProfile> findAll();
	
	public void deleteById(int id);
	
	public EdgeProfile findById(int id);
	
	public void save(EdgeProfile edgeProfile);
}
