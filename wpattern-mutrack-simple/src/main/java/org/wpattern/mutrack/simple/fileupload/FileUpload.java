package org.wpattern.mutrack.simple.fileupload;

import javax.persistence.AttributeOverride;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;

import org.wpattern.mutrack.simple.utils.BaseEntity;

@Entity
@Table(name = "tb_file_upload_pessoa")
@AttributeOverride(name = "id", column = @Column(name = "id_file_upload_pessoa") )
public class FileUpload extends BaseEntity<Long> {

	//private static final long serialVersionUID = 1L;
	private static final long serialVersionUID = 201505091506L;

	@Lob
	private byte[] file;

	@Column(name = "mime_type", nullable = true)
	private String mimeType;
	
	
	//@Column(name = "image_nome", nullable = false)
	private String image;

	public FileUpload() {

	}
	

	public FileUpload(byte[] file, String mimeType, String image) {
		super();
		this.file = file;
		this.mimeType = mimeType;
		this.image = image;
	}


	public byte[] getFile() {
		return file;
	}

	public void setFile(byte[] file) {
		this.file = file;
	}

	public String getMimeType() {
		return mimeType;
	}

	public void setMimeType(String mimeType) {
		this.mimeType = mimeType;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	

}
