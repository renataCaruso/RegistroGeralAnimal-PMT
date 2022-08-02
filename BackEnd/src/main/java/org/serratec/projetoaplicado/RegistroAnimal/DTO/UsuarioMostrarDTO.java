package org.serratec.projetoaplicado.RegistroAnimal.DTO;

import java.io.Serializable;
import java.time.LocalDate;

public class UsuarioMostrarDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Integer idUsuario;
	private String nomeCompleto;
	private LocalDate dataNasc;
	private String cpf;
	private String telefone;
	private String celular;
	private Boolean whatsapp;
	private String email;
	private String nis;
	private EnderecoMostrarDTO enderecoMostrarDTO;
	private String fotoUsuario;
	private String comprovanteResidencia;

	public UsuarioMostrarDTO() {
	}

	public Integer getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(Integer idUsuario) {
		this.idUsuario = idUsuario;
	}

	public String getNomeCompleto() {
		return nomeCompleto;
	}

	public void setNomeCompleto(String nomeCompleto) {
		this.nomeCompleto = nomeCompleto;
	}

	public LocalDate getDataNasc() {
		return dataNasc;
	}

	public void setDataNasc(LocalDate localDate) {
		this.dataNasc = localDate;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getCelular() {
		return celular;
	}

	public void setCelular(String celular) {
		this.celular = celular;
	}

	public Boolean getWhatsapp() {
		return whatsapp;
	}

	public void setWhatsapp(Boolean whatsapp) {
		this.whatsapp = whatsapp;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getNis() {
		return nis;
	}

	public void setNis(String nis) {
		this.nis = nis;
	}

		public EnderecoMostrarDTO getEnderecoMostrarDTO() {
		return enderecoMostrarDTO;
	}

	public void setEnderecoMostrarDTO(EnderecoMostrarDTO enderecoMostrarDTO) {
		this.enderecoMostrarDTO = enderecoMostrarDTO;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public String getFotoUsuario() {
		return fotoUsuario;
	}

	public void setFotoUsuario(String fotoUsuario) {
		this.fotoUsuario = fotoUsuario;
	}

	public String getComprovanteResidencia() {
		return comprovanteResidencia;
	}

	public void setComprovanteResidencia(String comprovanteResidencia) {
		this.comprovanteResidencia = comprovanteResidencia;
	}

}
