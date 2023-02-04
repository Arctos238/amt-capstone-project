package ca.sait.amt.restapplication.entity;

import static jakarta.persistence.GenerationType.IDENTITY;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "edge_profile", catalog = "amt")
public class EdgeProfile implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -3523781537535030442L;
	private Integer edgeProfileId;
	private String edgeProfileType;
	private String edgeProfileCut;
	private String edgeProfileMeasurement;

	public EdgeProfile() {

	}

	public EdgeProfile(String edgeProfileType, String edgeProfileCut, String edgeProfileMeasurement) {
		super();
		this.edgeProfileType = edgeProfileType;
		this.edgeProfileCut = edgeProfileCut;
		this.edgeProfileMeasurement = edgeProfileMeasurement;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "edge_profile_id", unique = true, nullable = false)
	public Integer getEdgeProfileId() {
		return this.edgeProfileId;
	}

	public void setEdgeProfileId(Integer edgeProfileId) {
		this.edgeProfileId = edgeProfileId;
	}

	@Column(name = "edge_profile_cut")
	public String getEdgeProfileCut() {
		return edgeProfileCut;
	}

	public void setEdgeProfileCut(String edgeProfileCut) {
		this.edgeProfileCut = edgeProfileCut;
	}

	@Column(name = "edge_profile_measurement")
	public String getEdgeProfileMeasurement() {
		return edgeProfileMeasurement;
	}

	public void setEdgeProfileMeasurement(String edgeProfileMeasurement) {
		this.edgeProfileMeasurement = edgeProfileMeasurement;
	}

	@Column(name = "edge_profile_type")
	public String getEdgeProfileType() {
		return this.edgeProfileType;
	}

	public void setEdgeProfileType(String edgeProfileType) {
		this.edgeProfileType = edgeProfileType;
	}

}
