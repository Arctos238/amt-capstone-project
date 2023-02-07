package ca.sait.amt.restapplication.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ca.sait.amt.restapplication.DAO.EdgeProfileDAO;
import ca.sait.amt.restapplication.entity.EdgeProfile;

@Service
public class EdgeProfileServiceImpl implements EdgeProfileService {
	private EdgeProfileDAO edgeProfileDAO;

	@Autowired
	public EdgeProfileServiceImpl(EdgeProfileDAO edgeProfileDAO) {
		this.edgeProfileDAO = edgeProfileDAO;
	}

	@Override
	@Transactional
	public void save(EdgeProfile edgeProfile) {
		edgeProfileDAO.save(edgeProfile);
	}

	@Override
	@Transactional
	public void delete(int id) {
		edgeProfileDAO.deleteById(id);
	}

	@Override
	@Transactional
	public List<EdgeProfile> findAll() {
		return edgeProfileDAO.findAll();
	}

	@Override
	@Transactional
	public EdgeProfile findById(int id) {
		return edgeProfileDAO.findById(id);
	}

}
