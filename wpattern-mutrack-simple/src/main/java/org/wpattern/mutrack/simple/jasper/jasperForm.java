package org.wpattern.mutrack.simple.jasper;

import java.util.Properties;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.jasperreports.JasperReportsPdfView;
import org.wpattern.mutrack.simple.utils.ServicePath;

@Controller
public class jasperForm {
	
	@Autowired
	private DataSource dataSource;
	@Autowired
	private ApplicationContext appContext;
	
	
	@RequestMapping(path = ServicePath.JASPER_FORM_PATH )		
	public ModelAndView generatePdfReport(){			
		
	final JasperReportsPdfView view = new JasperReportsPdfView();
	view.setUrl("classpath:form.jrxml");
	view.setJdbcDataSource(dataSource);
	view.setApplicationContext(appContext);	

	Properties props = new Properties();
	props.setProperty("Access-Control-Allow-Origin", "*");
	view.setHeaders(props);
	return new ModelAndView(view);
	
}

}
