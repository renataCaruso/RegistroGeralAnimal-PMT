package org.serratec.projetoaplicado.RegistroAnimal.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.serratec.projetoaplicado.RegistroAnimal.DTO.EnderecoMostrarDTO;
import org.serratec.projetoaplicado.RegistroAnimal.exception.EnderecoException;
import org.serratec.projetoaplicado.RegistroAnimal.model.Endereco;
import org.serratec.projetoaplicado.RegistroAnimal.repository.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EnderecoService {

	@Autowired
	EnderecoRepository enderecoRepository;

	public Endereco toModel(Endereco endereco, EnderecoMostrarDTO enderecoDTO) {
		endereco.setCep(enderecoDTO.getCep());
		endereco.setComplemento(enderecoDTO.getComplemento());
		endereco.setNumero(enderecoDTO.getNumero());
//		endereco.setRua(enderecoDTO.getRua());
//		endereco.setBairro(enderecoDTO.getBairro());
//		endereco.setCidade(enderecoDTO.getCidade());
		return endereco;
	}

	public EnderecoMostrarDTO toDTO(EnderecoMostrarDTO enderecoDTO, Endereco endereco) {
		enderecoDTO.setCep(endereco.getCep());
		enderecoDTO.setComplemento(endereco.getComplemento());
		enderecoDTO.setNumero(endereco.getNumero());
//		enderecoDTO.setRua(endereco.getRua());
//		enderecoDTO.setBairro(endereco.getBairro());
//		enderecoDTO.setCidade(endereco.getCidade());
		return enderecoDTO;
	}

	public String salvar(EnderecoMostrarDTO enderecoDTO) {
		Endereco endereco = new Endereco();
		endereco = toModel(endereco, enderecoDTO);
		enderecoRepository.save(endereco);
		return "Novo endereco cadastrado.";
	}

	public EnderecoMostrarDTO buscarPorId(Long idEndereco) throws EnderecoException {
		Optional<Endereco> funOptional = enderecoRepository.findById(idEndereco);
		Endereco endereco = new Endereco();
		EnderecoMostrarDTO enderecoDTO = new EnderecoMostrarDTO();

		if (funOptional.isPresent()) {
			endereco = funOptional.get();
			return toDTO(enderecoDTO, endereco);

		}
		throw new EnderecoException("Endereco não encontrada.");
	}

	public void delete(Long idEndereco) {
		enderecoRepository.deleteById(idEndereco);
	}

	public String atualizar(Long idEndereco, EnderecoMostrarDTO enderecoDTO) throws EnderecoException {
		Optional<Endereco> funOptional = enderecoRepository.findById(idEndereco);
		Endereco endereco = new Endereco();

		if (funOptional.isPresent()) {
			endereco = funOptional.get();
			if (enderecoDTO.getCep() != null) {
				endereco.setCep(enderecoDTO.getCep());
			}
			if (enderecoDTO.getComplemento() != null) {
				endereco.setComplemento(enderecoDTO.getComplemento());
			}
			if (enderecoDTO.getNumero() != null) {
				endereco.setNumero(enderecoDTO.getNumero());
			}
//			if (enderecoDTO.getRua() != null) {
//				endereco.setRua(enderecoDTO.getRua());
//			}
//			if (enderecoDTO.getBairro() != null) {
//				endereco.setBairro(enderecoDTO.getBairro());
//			}
//			if (enderecoDTO.getCidade() != null) {
//				endereco.setCidade(enderecoDTO.getCidade());
//			}
			
			enderecoRepository.save(endereco);
			return "Endereco atualizado.";
		}
		throw new EnderecoException("O endereco não foi atualizado");
	}

	public List<EnderecoMostrarDTO> todosEnderecos() {
		List<Endereco> lisEnderecos = enderecoRepository.findAll();
		List<EnderecoMostrarDTO> enderecoDTOs = new ArrayList<EnderecoMostrarDTO>();

		for (Endereco endereco : lisEnderecos) {
			EnderecoMostrarDTO enderecoDTO = new EnderecoMostrarDTO();
			enderecoDTO = toDTO(enderecoDTO, endereco);
			enderecoDTOs.add(enderecoDTO);
		}
		return enderecoDTOs;
	}

}
