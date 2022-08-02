package org.serratec.projetoaplicado.RegistroAnimal.DTO;

import java.io.Serializable;

public class AnimalPorUsuarioDTO implements Serializable{

	private static final long serialVersionUID = 1L;

	private String nomeAnimal;
	private String especie;
	private String sexo;
	private String raca;
	private String fotoAnimal;
	
	public AnimalPorUsuarioDTO() {
		super();
		
	}

	public AnimalPorUsuarioDTO(String nomeAnimal, String especie, String sexo, String raca, String fotoAnimal) {
		super();
		this.nomeAnimal = nomeAnimal;
		this.especie = especie;
		this.sexo = sexo;
		this.raca = raca;
		this.fotoAnimal = fotoAnimal;
	}

	public String getNomeAnimal() {
		return nomeAnimal;
	}

	public void setNomeAnimal(String nomeAnimal) {
		this.nomeAnimal = nomeAnimal;
	}

	public String getEspecie() {
		return especie;
	}

	public void setEspecie(String especie) {
		this.especie = especie;
	}

	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

	public String getRaca() {
		return raca;
	}

	public void setRaca(String raca) {
		this.raca = raca;
	}

	public String getFotoAnimal() {
		return fotoAnimal;
	}

	public void setFotoAnimal(String fotoAnimal) {
		this.fotoAnimal = fotoAnimal;
	}
	
	
	
}
