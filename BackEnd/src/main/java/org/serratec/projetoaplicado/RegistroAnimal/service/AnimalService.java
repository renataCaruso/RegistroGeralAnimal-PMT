package org.serratec.projetoaplicado.RegistroAnimal.service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.serratec.projetoaplicado.RegistroAnimal.DTO.AnimalDTO;
import org.serratec.projetoaplicado.RegistroAnimal.DTO.AnimalMostrarDTO;
import org.serratec.projetoaplicado.RegistroAnimal.DTO.AnimalPorUsuarioDTO;
import org.serratec.projetoaplicado.RegistroAnimal.exception.AnimalException;
import org.serratec.projetoaplicado.RegistroAnimal.model.Animal;
import org.serratec.projetoaplicado.RegistroAnimal.repository.AnimalRepository;
import org.serratec.projetoaplicado.RegistroAnimal.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AnimalService {

	@Autowired
	private RegistroGeral registroGeral;
	
	@Autowired
	UsuarioRepository usuarioRepository;

	@Autowired
	AnimalRepository animalRepository;

	@Autowired
	private ImagemService imagemService;

	public AnimalDTO transformarModelEmDTO(Animal animal, AnimalDTO animalDTO) {

		animalDTO.setIdAnimal(animal.getIdAnimal());
		animalDTO.setNomeAnimal(animal.getNomeAnimal());
		animalDTO.setEspecie(animal.getEspecie());
		animalDTO.setSexo(animal.getSexo());
		animalDTO.setRaca(animal.getRaca());
		animalDTO.setDataNascAnim(animal.getDataNascAnim());
		animalDTO.setDescricao(animal.getDescricao());
		animalDTO.setVacinaMultipla(animal.getVacinaMultipla());
		animalDTO.setVacinaAntiRabica(animal.getVacinaAntiRabica());
		animalDTO.setFotoAnimal(imagemService.encodeImage(animal.getFotoAnimal()));
		animalDTO.setCarteiraVacinacao(imagemService.encodeImage(animal.getCarteiraVacinacao()));
		animalDTO.setCastrado(animal.getCastrado());
		animalDTO.setDesejaCastrar(animal.getDesejaCastrar());
		animalDTO.setChip(animal.getChip());
		animalDTO.setChipado(animal.getChipado());
		animalDTO.setFiv(animal.getFiv());
		animalDTO.setFelv(animal.getFelv());
		animalDTO.setIdUsuario(animal.getUsuario().getIdUsuario());
		animalDTO.setRga(animal.getRga());
		return animalDTO;

	}

	public AnimalMostrarDTO transformarModelEmDTO(Animal animal, AnimalMostrarDTO animalDTO) {

		animalDTO.setRga(animal.getRga());
		animalDTO.setIdUsuario(animal.getUsuario().getIdUsuario());
		animalDTO.setCelular(animal.getUsuario().getCelular());
		animalDTO.setCpf(animal.getUsuario().getCpf());
		animalDTO.setDataNasc(animal.getUsuario().getDataNasc());
		animalDTO.setEmail(animal.getUsuario().getEmail());
		animalDTO.setNis(animal.getUsuario().getNis());
		animalDTO.setNomeCompleto(animal.getUsuario().getNomeCompleto());
		animalDTO.setSenha(animal.getUsuario().getSenha());
		animalDTO.setTelefone(animal.getUsuario().getTelefone());
		animalDTO.setWhatsapp(animal.getUsuario().getWhatsapp());
		return animalDTO;

	}
	
	public AnimalPorUsuarioDTO transformarModelEmDTO(Animal animal, AnimalPorUsuarioDTO animalDTO) {

		animalDTO.setNomeAnimal(animal.getNomeAnimal());
		animalDTO.setEspecie(animal.getEspecie());
		animalDTO.setSexo(animal.getSexo());
		animalDTO.setRaca(animal.getRaca());
		animalDTO.setFotoAnimal(imagemService.encodeImage(animal.getFotoAnimal()));
		return animalDTO;
	}
	
	
	public Animal transformarDTOEmModel(Animal animal, AnimalDTO animalDTO) {

		animal.setNomeAnimal(animalDTO.getNomeAnimal());
		animal.setEspecie(animalDTO.getEspecie());
		animal.setSexo(animalDTO.getSexo());
		animal.setRaca(animalDTO.getRaca());
		animal.setDataNascAnim(animalDTO.getDataNascAnim());
		animal.setDescricao(animalDTO.getDescricao());
		animal.setVacinaMultipla(animalDTO.getVacinaMultipla());
		animal.setVacinaAntiRabica(animalDTO.getVacinaAntiRabica());
		animal.setFotoAnimal(imagemService.decodeImage(animalDTO.getFotoAnimal()));
		animal.setCarteiraVacinacao(imagemService.decodeImage(animalDTO.getCarteiraVacinacao()));
		animal.setCastrado(animalDTO.getCastrado());
		animal.setDesejaCastrar(animalDTO.getDesejaCastrar());
		animal.setChip(animalDTO.getChip());
		animal.setChipado(animalDTO.getChipado());
		animal.setFiv(animalDTO.getFiv());
		animal.setFelv(animalDTO.getFelv());
		animal.setUsuario(usuarioRepository.findById(animalDTO.getIdUsuario()).get());
		animal.setRga(registroGeral.getRemId());
		return animal;
	}

	public String salvar(AnimalDTO animalDTO) {
		Animal animal = new Animal();
		animal = transformarDTOEmModel(animal, animalDTO);
		animalRepository.save(animal);
		return "O id do Animal criado é: " + animal.getIdAnimal();

	}

	public String ultimoRegistro() {
		return animalRepository.ultimoRegistro();
	}
	
	public AnimalDTO buscarPorId(Integer idAnimal) throws AnimalException {
		Optional<Animal> animal = animalRepository.findById(idAnimal);
		Animal animalPorId = new Animal();
		AnimalDTO animalDTO = new AnimalDTO();
		if (animal.isPresent()) {
			animalPorId = animal.get();
			transformarModelEmDTO(animalPorId, animalDTO);
			return animalDTO;
		}
		throw new AnimalException("Animal com o id informado não encontrado");
	}

	public void deletar(Integer idAnimal) {
		animalRepository.deleteById(idAnimal);
	}

	public String atualizar(Integer idAnimal, AnimalDTO animalDTO) throws AnimalException {
		Optional<Animal> animal = animalRepository.findById(idAnimal);
		Animal animalBanco = new Animal();
		if (animal.isPresent()) {
			animalBanco = animal.get();
			if (animalDTO.getNomeAnimal() != null) {
				animalBanco.setNomeAnimal(animalDTO.getNomeAnimal());
			}
			if (animalDTO.getEspecie() != null) {
				animalBanco.setEspecie(animalDTO.getEspecie());
			}
			if (animalDTO.getSexo() != null) {
				animalBanco.setSexo(animalDTO.getSexo());
			}
			if (animalDTO.getRaca() != null) {
				animalBanco.setRaca(animalDTO.getRaca());
			}
			if (animalDTO.getDataNascAnim() != null) {
				animalBanco.setDataNascAnim(animalDTO.getDataNascAnim());
			}
			if (animalDTO.getDescricao() != null) {
				animalBanco.setDescricao(animalDTO.getDescricao());
			}
			if (animalDTO.getFotoAnimal() != null) {
				animalBanco.setFotoAnimal(imagemService.decodeImage(animalDTO.getFotoAnimal()));
			}
			if (animalDTO.getVacinaMultipla() != null) {
				animalBanco.setVacinaMultipla(animalDTO.getVacinaMultipla());
			}
			if (animalDTO.getVacinaAntiRabica() != null) {
				animalBanco.setVacinaAntiRabica(animalDTO.getVacinaAntiRabica());
			}
			if (animalDTO.getCarteiraVacinacao() != null) {
				animalBanco.setCarteiraVacinacao(imagemService.decodeImage(animalDTO.getCarteiraVacinacao()));
			}
			if (animalDTO.getCastrado() != null) {
				animalBanco.setCastrado(animalDTO.getCastrado());
			}
			if (animalDTO.getDesejaCastrar() != null) {
				animalBanco.setDesejaCastrar(animalDTO.getDesejaCastrar());
			}
			if (animalDTO.getChip() != null) {
				animalBanco.setChip(animalDTO.getChip());
			}
			animalRepository.save(animalBanco);
			return "O Animal com o id " + animalBanco.getUsuario() + " foi atualizado!";
		}
		throw new AnimalException("O Animal NÃO foi atualizado!");
	}

	public List<AnimalDTO> buscarTodos() {
		List<Animal> listaAnimalModel = animalRepository.findAll();
		List<AnimalDTO> listaAnimalDTO = new ArrayList<>();

		for (Animal animal : listaAnimalModel) {
			AnimalDTO animalDTO = new AnimalDTO();
			animalDTO = transformarModelEmDTO(animal, animalDTO);
			listaAnimalDTO.add(animalDTO);
		}
		return listaAnimalDTO;
	}

	public List<AnimalPorUsuarioDTO> buscarAnimaisPorIdUsuario(Integer idUsuario) {
		List<Animal> listaAnimalModel = animalRepository.buscarAnimaisPorIdUsuario(idUsuario);
		List<AnimalPorUsuarioDTO> listaAnimalDTO = new ArrayList<>();

		for (Animal animal : listaAnimalModel) {
			AnimalPorUsuarioDTO animalDTO = new AnimalPorUsuarioDTO();
			animalDTO = transformarModelEmDTO(animal, animalDTO);
			listaAnimalDTO.add(animalDTO);
		}
		return listaAnimalDTO;
	}
	
	public void salvarListaAnimal(List<AnimalDTO> listaAnimalDTO) {

		for (AnimalDTO animalDTO : listaAnimalDTO) {
			Animal animal = new Animal();
			animal = transformarDTOEmModel(animal, animalDTO);
			animalRepository.save(animal);
		}

	}

	public String buscarFotoPorAnimal(Integer idAnimal) {
		Animal animal = animalRepository.findById(idAnimal).get();
		return imagemService.encodeImage(animal.getFotoAnimal());
	}

	public String buscarCarteiraVacinacao(Integer idAnimal) {
		Animal animal = animalRepository.findById(idAnimal).get();
		return imagemService.encodeImage(animal.getCarteiraVacinacao());
	}
	
	public AnimalMostrarDTO buscarPorRga(String rga) throws AnimalException {
		Optional<Animal> animal = animalRepository.buscarPorRga(rga);
		Animal animalPorId = new Animal();
		AnimalMostrarDTO animalDTO = new AnimalMostrarDTO();
		if (animal.isPresent()) {
			animalPorId = animal.get();
			transformarModelEmDTO(animalPorId, animalDTO);
			return animalDTO;
		}
		throw new AnimalException("Animal com o Rga informado não encontrado");
	}
	
//	public void salvarImagens(AnimalImagensDTO animalDTO) {
//		Animal animal = animalRepository.findById(animalDTO.getIdAnimal()).get();
//		animal.setCarteiraVacinacao(animalDTO.getCarteiraVacinacao());
//		animal.setFotoAnimal(animalDTO.getFotoAnimal());
//		animalRepository.save(animal);
//	}
}
