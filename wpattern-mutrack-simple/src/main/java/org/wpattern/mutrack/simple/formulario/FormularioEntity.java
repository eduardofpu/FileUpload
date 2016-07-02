package org.wpattern.mutrack.simple.formulario;

import javax.persistence.AttributeOverride;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;

import org.wpattern.mutrack.simple.utils.BaseEntity;


@Entity
@Table(name = "tb_formulario")
@AttributeOverride(name = "id", column = @Column(name = "pk_id"))
public class FormularioEntity extends BaseEntity<Long>{
	private static final long serialVersionUID = 201505091506L;
	
	@Column(name = "email", length = 255, nullable = false, unique = true)
	private String email;
	
	@Column(name = "name", length = 60, nullable = false)
	private String name;
	
	@Column(name = "idade", length = 3, nullable = false)
	private String idade;
	
	@Column(name = "senha", length = 8, nullable = false)
	private String senha;
	
	@Column(name = "sex", length = 2, nullable = false)
	private String sex;
	
	

	
	public FormularioEntity() {
	}


	public FormularioEntity(String email, String name, String idade,String senha,String sex) {
		super();
		this.email = email;
		this.name = name;
		this.idade = idade;
		this.senha = senha;
		this.sex = sex;
		
	}
	
	

	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getIdade() {
		return idade;
	}



	public void setIdade(String idade) {
		this.idade = idade;
	}


	public String getSenha() {
		return senha;
	}


	public void setSenha(String senha) {
		this.senha = senha;
	}


	public String getSex() {
		return sex;
	}


	public void setSex(String sex) {
		this.sex = sex;
	}


}
