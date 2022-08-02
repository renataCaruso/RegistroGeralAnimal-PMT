package org.serratec.projetoaplicado.RegistroAnimal.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.serratec.projetoaplicado.RegistroAnimal.enums.Estado;

@Entity
@Table(name = "endereco")
public class Endereco implements Serializable {

	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "endereco_cd_id")
	private Integer idEndereco;

	@Column(name = "endereco_tx_cep")
	private String cep;

	@Column(name = "endereco_tx_rua")
	private String rua;

	@Column(name = "endereco_tx_bairro")
	private String bairro;

	@Column(name = "endereco_tx_cidade")
	private String cidade;

	@Column(name = "endereco_tx_numero")
	private String numero;

	@Column(name = "endereco_tx_complemento")
	private String complemento;

	@Enumerated(EnumType.STRING)
	private Estado estado;

	public Integer getIdEndereco() {
		return idEndereco;
	}

	public void setIdEndereco(Integer idEndereco) {
		this.idEndereco = idEndereco;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getRua() {
		return rua;
	}

	public void setRua(String rua) {
		this.rua = rua;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getComplemento() {
		return complemento;
	}

	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}

	public Estado getEstado() {
		return estado;
	}

	public void setEstado(Estado estado) {
		this.estado = estado;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

}
