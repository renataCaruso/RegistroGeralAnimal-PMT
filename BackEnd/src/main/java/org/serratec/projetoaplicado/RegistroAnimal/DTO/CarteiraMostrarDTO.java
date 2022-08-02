package org.serratec.projetoaplicado.RegistroAnimal.DTO;

import java.io.Serializable;
import java.time.LocalDate;

public class CarteiraMostrarDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private String nomeUsuario;
	private String nomeAnimal;
	private String especie;
	private String sexo;
	private String raca;
	private LocalDate dataNascimento;
	private LocalDate vacinaMultipla;
	private LocalDate vacinaAntiRabica;
	private String chip;
	private String fotoAnimal;
	private String rga;
	private String qrcode;

	public CarteiraMostrarDTO() {
		super();
	}

	public String getFotoAnimal() {
		return fotoAnimal;
	}

	public void setFotoAnimal(String fotoAnimal) {
		this.fotoAnimal = fotoAnimal;
	}

	public String getNomeUsuario() {
		return nomeUsuario;
	}

	public void setNomeUsuario(String nomeUsuario) {
		this.nomeUsuario = nomeUsuario;
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

	public LocalDate getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(LocalDate dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public LocalDate getVacinaMultipla() {
		return vacinaMultipla;
	}

	public void setVacinaMultipla(LocalDate vacinaMultipla) {
		this.vacinaMultipla = vacinaMultipla;
	}

	public LocalDate getVacinaAntiRabica() {
		return vacinaAntiRabica;
	}

	public void setVacinaAntiRabica(LocalDate vacinaAntiRabica) {
		this.vacinaAntiRabica = vacinaAntiRabica;
	}

	public String getChip() {
		return chip;
	}

	public void setChip(String chip) {
		this.chip = chip;
	}

	public String getRga() {
		return rga;
	}

	public void setRga(String rga) {
		this.rga = rga;
	}

	public String getQrcode() {
		return qrcode;
	}

	public void setQrcode(String qrcode) {
		this.qrcode = qrcode;
	}

}
