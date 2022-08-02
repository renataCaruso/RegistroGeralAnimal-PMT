package org.serratec.projetoaplicado.RegistroAnimal.DTO;

import java.io.Serializable;
import java.time.LocalDate;


public class AnimalDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Integer idAnimal;
	private String nomeAnimal;
	private String especie;
	private String sexo;
	private String raca;
	private LocalDate dataNascAnim;
	private String descricao;
	private String fotoAnimal;
	private String carteiraVacinacao;
	private LocalDate vacinaMultipla;
	private LocalDate vacinaAntiRabica;
	private Boolean castrado;
	private Boolean desejaCastrar;
	private Boolean chipado;
	private String chip;
	private Boolean fiv;
	private Boolean felv;
	private Integer idUsuario;
	private String rga;

	public AnimalDTO() {
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

	public LocalDate getDataNascAnim() {
		return dataNascAnim;
	}

	public void setDataNascAnim(LocalDate dataNascAnim) {
		this.dataNascAnim = dataNascAnim;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	public String getFotoAnimal() {
		return fotoAnimal;
	}

	public void setFotoAnimal(String fotoAnimal) {
		this.fotoAnimal = fotoAnimal;
	}

	public String getCarteiraVacinacao() {
		return carteiraVacinacao;
	}

	public void setCarteiraVacinacao(String carteiraVacinacao) {
		this.carteiraVacinacao = carteiraVacinacao;
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

		public Boolean getCastrado() {
		return castrado;
	}

	public void setCastrado(Boolean castrado) {
		this.castrado = castrado;
	}

	public Boolean getDesejaCastrar() {
		return desejaCastrar;
	}

	public void setDesejaCastrar(Boolean desejaCastrar) {
		this.desejaCastrar = desejaCastrar;
	}

	public String getChip() {
		return chip;
	}

		public Boolean getChipado() {
		return chipado;
	}

	public void setChipado(Boolean chipado) {
		this.chipado = chipado;
	}

	public void setChip(String chip) {
		this.chip = chip;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public Integer getIdAnimal() {
		return idAnimal;
	}

	public void setIdAnimal(Integer idAnimal) {
		this.idAnimal = idAnimal;
	}

	public Integer getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(Integer idUsuario) {
		this.idUsuario = idUsuario;
	}

	public String getRga() {
		return rga;
	}

	public void setRga(String rga) {
		this.rga = rga;
	}

	public Boolean getFiv() {
		return fiv;
	}

	public void setFiv(Boolean fiv) {
		this.fiv = fiv;
	}

	public Boolean getFelv() {
		return felv;
	}

	public void setFelv(Boolean felv) {
		this.felv = felv;
	}

}
