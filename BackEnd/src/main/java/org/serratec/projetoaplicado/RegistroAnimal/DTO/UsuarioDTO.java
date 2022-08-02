package org.serratec.projetoaplicado.RegistroAnimal.DTO;

import java.io.Serializable;
import java.time.LocalDate;

public class UsuarioDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String nomeCompleto;
	private LocalDate dataNasc;
	private String cpf;
	private String telefone;
	private String celular;
	private Boolean whatsapp;
	private String email;
	private String nis;
	private String senha;
	private EnderecoDTO enderecoDTO;
	private String fotoUsuario;
	private String comprovanteResidencia;

	public UsuarioDTO() {
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

	public void setDataNasc(LocalDate dataNasc) {
		this.dataNasc = dataNasc;
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

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

		public EnderecoDTO getEnderecoDTO() {
		return enderecoDTO;
	}

	public void setEnderecoDTO(EnderecoDTO enderecoDTO) {
		this.enderecoDTO = enderecoDTO;
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
