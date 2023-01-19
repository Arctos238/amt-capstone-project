package ca.sait.amt.restappilcation.entity;
// Generated Jan. 19, 2023, 2:55:38 p.m. by Hibernate Tools 4.3.6.Final

import static jakarta.persistence.GenerationType.IDENTITY;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

/**
 * Image generated by hbm2java
 */
@Entity
@Table(name = "image", catalog = "amt")
public class Image implements java.io.Serializable {

	private Integer imageId;
	private Project project;
	private String imageType;
	private String documentName;
	private String imageUrl;

	public Image() {
	}

	public Image(String imageType, String documentName, String imageUrl) {
		this.imageType = imageType;
		this.documentName = documentName;
		this.imageUrl = imageUrl;
	}

	public Image(Project project, String imageType, String documentName, String imageUrl) {
		this.project = project;
		this.imageType = imageType;
		this.documentName = documentName;
		this.imageUrl = imageUrl;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)

	@Column(name = "image_id", unique = true, nullable = false)
	public Integer getImageId() {
		return this.imageId;
	}

	public void setImageId(Integer imageId) {
		this.imageId = imageId;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "project_id")
	public Project getProject() {
		return this.project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	@Column(name = "image_type", nullable = false, length = 5)
	public String getImageType() {
		return this.imageType;
	}

	public void setImageType(String imageType) {
		this.imageType = imageType;
	}

	@Column(name = "document_name", nullable = false, length = 12)
	public String getDocumentName() {
		return this.documentName;
	}

	public void setDocumentName(String documentName) {
		this.documentName = documentName;
	}

	@Column(name = "image_url", nullable = false, length = 50)
	public String getImageUrl() {
		return this.imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

}
