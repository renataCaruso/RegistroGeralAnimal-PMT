package org.serratec.projetoaplicado.RegistroAnimal.DTO;

import org.serratec.projetoaplicado.RegistroAnimal.enums.Estado;
import org.serratec.projetoaplicado.RegistroAnimal.model.Endereco;
import org.springframework.web.client.RestTemplate;

public class EnderecoMostrarDTO {

	private Integer idEndereco;
    private String cep;
    private String numero;
    private String complemento;
    private String rua;
	private String bairro;
	private String cidade;
	private String estado;

    public Endereco toEndereco() {
        Endereco endereco = new Endereco();
        endereco.setCep(this.cep);
        endereco.setNumero(this.numero);
        endereco.setComplemento(this.complemento);
        endereco.setRua(this.rua);
        endereco.setBairro(this.bairro);
        endereco.setCidade(this.cidade);

        String uri = "https://viacep.com.br/ws/" + this.cep + "/json/";

        RestTemplate rest = new RestTemplate();
        EnderecoViaCepDTO viaCep = rest.getForObject(uri, EnderecoViaCepDTO.class);

        endereco.setEstado(Estado.valueOf(viaCep.getUf()));
        endereco.setCidade(viaCep.getLocalidade());
        endereco.setBairro(viaCep.getBairro());
        endereco.setRua(viaCep.getLogradouro());
              
        return endereco;
        
    }

    public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

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

		public String getCidade() {
			return cidade;
		}

		public void setCidade(String cidade) {
			this.cidade = cidade;
		}

}
