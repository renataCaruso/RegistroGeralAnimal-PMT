package org.serratec.projetoaplicado.RegistroAnimal.DTO;

import org.serratec.projetoaplicado.RegistroAnimal.model.Imagem;

public class UsuarioImagensDTO {
	
	private Integer idUsuario;
	private Imagem fotoUsuario;
	private Imagem comprovanteResidencia;
	
	public UsuarioImagensDTO() {
		super();
	}
	
	public Integer getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(Integer idUsuario) {
		this.idUsuario = idUsuario;
	}

	public Imagem getFotoUsuario() {
		return fotoUsuario;
	}
	
	public void setFotoUsuario(Imagem fotoUsuario) {
		this.fotoUsuario = fotoUsuario;
	}
	
	public Imagem getComprovanteResidencia() {
		return comprovanteResidencia;
	}
	
	public void setComprovanteResidencia(Imagem comprovanteResidencia) {
		this.comprovanteResidencia = comprovanteResidencia;
	}

}
