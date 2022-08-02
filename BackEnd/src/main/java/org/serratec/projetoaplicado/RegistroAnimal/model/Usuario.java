package org.serratec.projetoaplicado.RegistroAnimal.model;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.br.CPF;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "usuario")
public class Usuario implements Serializable {

	private static final long serialVersionUID = -4567532709342119233L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "usuario_cd_id")
	private Integer idUsuario;

	@NotBlank(message = "Preencha o nome completo")
	@Size(max = 60, message = "Tamanho máximo do nome é 60 caracteres")
	@Column(name = "usuario_tx_nome_completo", length = 60, nullable = false)
	private String nomeCompleto;

	@Column(name = "usuario_dt_data_nasc", nullable = false)
	@DateTimeFormat(pattern = "dd-MM-yyyy")
	private LocalDate dataNasc;

	@Size(max = 14, message = "Tamanho máximo do CPF é 14 caracteres")
	@CPF(message = "Preencha um CPF válido.")
	@Column(name = "usuario_tx_cpf", unique = true, nullable = false)
	private String cpf;

	@Column(name = "usuario_tx_telefone")
	private String telefone;

	@Column(name = "usuario_tx_celular", nullable = false)
	private String celular;

	@Column(name = "usuario_tx_whatsapp", nullable = false)
	private Boolean whatsapp;

	@NotBlank(message = "Preencha o e-mail do cliente.")
	@Size(max = 50, message = "Tamanho máximo do e-mail é 50 caracteres")
	@Email(message = "Preencha um e-mail válido.")
	@Column(name = "usuario_tx_email", length = 50, unique = true, nullable = false)
	private String email;

	@Size(max = 30, message = "Tamanho máximo da senha é 30 caracteres")
	@Column(name = "usuario_tx_senha", length = 30, nullable = false)
	private String senha;

	@Column(name = "usuario_tx_nis")
	private String nis;

	@Column(name = "foto_usuario")
	private byte[] fotoUsuario;

	@Column(name = "comprovante_residencia")
	private byte[] comprovanteResidencia;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "endereco_id", referencedColumnName = "endereco_cd_id", nullable = false)
	@JsonIgnore
	private Endereco endereco;

	@JsonIgnore
	@OneToMany(mappedBy = "usuario")
	private List<Animal> listaAnimal;

	public Usuario() {
		super();
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

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getNis() {
		return nis;
	}

	public void setNis(String nis) {
		this.nis = nis;
	}

	public byte[] getFotoUsuario() {
		return fotoUsuario;
	}

	public void setFotoUsuario(byte[] fotoUsuario) {
		this.fotoUsuario = fotoUsuario;
	}

	public byte[] getComprovanteResidencia() {
		return comprovanteResidencia;
	}

	public void setComprovanteResidencia(byte[] comprovanteResidencia) {
		this.comprovanteResidencia = comprovanteResidencia;
	}

	public Endereco getEndereco() {
		return endereco;
	}

	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}

	public List<Animal> getListaAnimal() {
		return listaAnimal;
	}

	public void setListaAnimal(List<Animal> listaAnimal) {
		this.listaAnimal = listaAnimal;
	}

	public Usuario(
			@NotBlank(message = "Preencha o e-mail do cliente.") @Size(max = 50, message = "Tamanho máximo do e-mail é 50 caracteres") @Email(message = "Preencha um e-mail válido.") String email,
			@Size(max = 30, message = "Tamanho máximo da senha é 30 caracteres") String senha) {
		super();
		this.email = email;
		this.senha = senha;
	}

}
