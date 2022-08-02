package org.serratec.projetoaplicado.RegistroAnimal.DTO;

import java.io.Serializable;
import java.time.LocalDate;

public class AnimalMostrarDTO implements Serializable{

	private static final long serialVersionUID = 1L;

	private String rga;
	private Integer idUsuario;
	private String celular;
	private String cpf;
	private LocalDate dataNasc;
	private String email;
	private String nis;
	private String nomeCompleto;
	private String senha;
	private String telefone;
	private Boolean whatsapp;
	
	public AnimalMostrarDTO() {
		super();
	}

	public AnimalMostrarDTO(String rga, Integer idUsuario, String celular, String cpf, LocalDate dataNasc, String email,
			String nis, String nomeCompleto, String senha, String telefone, Boolean whatsapp) {
		super();
		this.rga = rga;
		this.idUsuario = idUsuario;
		this.celular = celular;
		this.cpf = cpf;
		this.dataNasc = dataNasc;
		this.email = email;
		this.nis = nis;
		this.nomeCompleto = nomeCompleto;
		this.senha = senha;
		this.telefone = telefone;
		this.whatsapp = whatsapp;
	}

	public String getRga() {
		return rga;
	}

	public void setRga(String rga) {
		this.rga = rga;
	}

	public Integer getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(Integer idUsuario) {
		this.idUsuario = idUsuario;
	}

	public String getCelular() {
		return celular;
	}

	public void setCelular(String celular) {
		this.celular = celular;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public LocalDate getDataNasc() {
		return dataNasc;
	}

	public void setDataNasc(LocalDate dataNasc) {
		this.dataNasc = dataNasc;
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

	public String getNomeCompleto() {
		return nomeCompleto;
	}

	public void setNomeCompleto(String nomeCompleto) {
		this.nomeCompleto = nomeCompleto;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public Boolean getWhatsapp() {
		return whatsapp;
	}

	public void setWhatsapp(Boolean whatsapp) {
		this.whatsapp = whatsapp;
	}
	
	
	
}
