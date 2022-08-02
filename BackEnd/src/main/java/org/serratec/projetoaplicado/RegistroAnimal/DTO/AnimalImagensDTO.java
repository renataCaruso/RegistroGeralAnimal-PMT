package org.serratec.projetoaplicado.RegistroAnimal.DTO;

import org.serratec.projetoaplicado.RegistroAnimal.model.Imagem;

public class AnimalImagensDTO {
	private Integer idAnimal;
	private Imagem fotoAnimal;
	private Imagem carteiraVacinacao;
	
	public AnimalImagensDTO() {
		super();
			}

	public Integer getIdAnimal() {
		return idAnimal;
	}

	public void setIdAnimal(Integer idAnimal) {
		this.idAnimal = idAnimal;
	}

	public Imagem getFotoAnimal() {
		return fotoAnimal;
	}

	public void setFotoAnimal(Imagem fotoAnimal) {
		this.fotoAnimal = fotoAnimal;
	}

	public Imagem getCarteiraVacinacao() {
		return carteiraVacinacao;
	}

	public void setCarteiraVacinacao(Imagem carteiraVacinacao) {
		this.carteiraVacinacao = carteiraVacinacao;
	}
	
	
}
