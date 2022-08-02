package org.serratec.projetoaplicado.RegistroAnimal.model;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "animal")
public class Animal implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "animal_cd_id")
	private Integer idAnimal;

	@Column(name = "animal_tx_nome_animal")
	private String nomeAnimal;

	@Column(name = "animal_tx_especie")
	private String especie;

	@Column(name = "animal_tx_sexo")
	private String sexo;

	@Column(name = "animal_tx_raca")
	private String raca;

	@Column(name = "animal_dt_data_nasc")
	@DateTimeFormat(pattern = "dd-MM-yyyy")
	private LocalDate dataNascAnim;

	@Column(name = "animal_tx_descricao")
	private String descricao;

//	@OneToOne(cascade = CascadeType.ALL)
	@Column(name = "animal_foto")
	private byte[] fotoAnimal;

//	@OneToOne(cascade = CascadeType.ALL)
	@Column(name = "animal_carteira_vacinacao")
	private byte[] carteiraVacinacao;

	@Column(name = "animal_dt_vacina_multipla")
	private LocalDate vacinaMultipla;

	@Column(name = "animal_dt_anti_rabica")
	private LocalDate vacinaAntiRabica;

	@Column(name = "animal_tx_castrado")
	private Boolean castrado;

	@Column(name = "animal_tx_deseja_castrar")
	private Boolean desejaCastrar;

	@Column(name = "animal_tx_chipado")
	private Boolean chipado;

	@Column(name = "animal_tx_chip")
	private String chip;

	@Column(name = "animal_tx_fiv")
	private Boolean fiv;

	@Column(name = "animal_tx_felv")
	private Boolean felv;

	@Column(name = "animal_tx_rga")
	private String rga;

	@ManyToOne
	@JoinColumn(name = "usuario_cd_id", referencedColumnName = "usuario_cd_id")
	private Usuario usuario;

	public Animal() {
		super();
	}

	public Integer getIdAnimal() {
		return idAnimal;
	}

	public void setIdAnimal(Integer idAnimal) {
		this.idAnimal = idAnimal;
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

	public byte[] getFotoAnimal() {
		return fotoAnimal;
	}

	public void setFotoAnimal(byte[] fotoAnimal) {
		this.fotoAnimal = fotoAnimal;
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

	public byte[] getCarteiraVacinacao() {
		return carteiraVacinacao;
	}

	public void setCarteiraVacinacao(byte[] carteiraVacinacao) {
		this.carteiraVacinacao = carteiraVacinacao;
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

	public void setChip(String chip) {
		this.chip = chip;
	}

	public Boolean getChipado() {
		return chipado;
	}

	public void setChipado(Boolean chipado) {
		this.chipado = chipado;
	}

	public String getRga() {
		return rga;
	}

	public void setRga(String rga) {
		this.rga = rga;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
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
