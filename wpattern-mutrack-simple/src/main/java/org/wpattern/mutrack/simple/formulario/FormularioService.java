package org.wpattern.mutrack.simple.formulario;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wpattern.mutrack.simple.utils.GenericService;
import org.wpattern.mutrack.simple.utils.ServicePath;

@RestController
@RequestMapping(path = ServicePath.FORM_PATH)
public class FormularioService extends GenericService<FormularioEntity, Long>{
	
	

}
