	package org.serratec.projetoaplicado.RegistroAnimal.model;

	import java.util.Arrays;
	import java.util.Objects;

	import javax.persistence.Column;
	import javax.persistence.Entity;
	import javax.persistence.EnumType;
	import javax.persistence.Enumerated;
	import javax.persistence.GeneratedValue;
	import javax.persistence.GenerationType;
	import javax.persistence.Id;
	import javax.persistence.Lob;
	import javax.persistence.Table;

	import org.hibernate.annotations.Type;
	import org.serratec.projetoaplicado.RegistroAnimal.enums.TipoImagem;

	@Entity
	@Table(name = "imagem")
	public class Imagem {

		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		@Column(name = "id_imagem")
		private Integer idImagem;

		@Column(name = "imagem", length = 30, nullable = false)
		private String nomeImagem;

		@Column(name = "type", length = 10, nullable = false)
		private String mimetype;
		
		@Enumerated(EnumType.STRING)
		private TipoImagem tipo;

		@Lob
		@Column(name = "dados", nullable = false)
		@Type(type = "org.hibernate.type.BinaryType")
		private byte[] dados;

		public Imagem(Integer idImagem, String nomeImagem, String mimetype, byte[] dados) {
			super();
			this.idImagem = idImagem;
			this.nomeImagem = nomeImagem;
			this.mimetype = mimetype;
			this.dados = dados;
		}

		public Imagem() {
			super();
		}

		public Integer getIdImagem() {
			return idImagem;
		}

		public void setIdImagem(Integer idImagem) {
			this.idImagem = idImagem;
		}

		public String getNomeImagem() {
			return nomeImagem;
		}

		public void setNomeImagem(String nomeImagem) {
			this.nomeImagem = nomeImagem;
		}

		public String getMimetype() {
			return mimetype;
		}

		public void setMimetype(String mimetype) {
			this.mimetype = mimetype;
		}

		public byte[] getDados() {
			return dados;
		}

		public void setDados(byte[] dados) {
			this.dados = dados;
		}

		@Override
		public int hashCode() {
			final int prime = 31;
			int result = 1;
			result = prime * result + Arrays.hashCode(dados);
			result = prime * result + Objects.hash(idImagem, mimetype, nomeImagem);
			return result;
		}

		@Override
		public boolean equals(Object obj) {
			if (this == obj)
				return true;
			if (obj == null)
				return false;
			if (getClass() != obj.getClass())
				return false;
			Imagem other = (Imagem) obj;
			return Arrays.equals(dados, other.dados) && Objects.equals(idImagem, other.idImagem)
					&& Objects.equals(mimetype, other.mimetype) && Objects.equals(nomeImagem, other.nomeImagem);
		}
}
