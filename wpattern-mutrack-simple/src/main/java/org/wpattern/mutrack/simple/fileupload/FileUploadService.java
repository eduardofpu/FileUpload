package org.wpattern.mutrack.simple.fileupload;



import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.wpattern.mutrack.simple.utils.GenericService;
import org.wpattern.mutrack.simple.utils.ServicePath;
@RestController
@RequestMapping(path = ServicePath.FILE_PATH )
public class FileUploadService<T> extends GenericService<FileUpload, Long> {
	
	private final Logger LOGGER = Logger.getLogger(this.getClass());
	
	@Autowired
    FileUploadRepository fileUploadRepository;

	
    @RequestMapping(method = RequestMethod.POST)
    public FileUpload insert(@RequestBody FileUpload f) {
		this.LOGGER.debug(String.format("Saving the entity [%s].",f));      	
    	f.setId(null);
	
    	return this.fileUploadRepository.save(f);
		
    }
	
	@RequestMapping(method = RequestMethod.PUT)
	public void update(@RequestBody FileUpload f) {
		this.LOGGER.debug(String.format("Request to update the record [%s].", f));

		if (f == null) {
			this.LOGGER.error("Entity can not be null.");
			return;
		}

		if (f.getId() == null) {
			this.LOGGER.error("ID can not be null.");
			return;
		}

		this.genericRepository.save(f);
	}
	
	@RequestMapping(method = RequestMethod.DELETE)
	public void delete(@RequestBody FileUpload f) {
		this.LOGGER.debug(String.format("Request to delete the record [%s].", f));

		this.genericRepository.delete(f);
	}
	
	
}
