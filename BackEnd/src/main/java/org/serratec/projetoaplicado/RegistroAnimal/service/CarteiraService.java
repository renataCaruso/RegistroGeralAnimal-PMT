package org.serratec.projetoaplicado.RegistroAnimal.service;

import java.time.LocalDate;

import org.serratec.projetoaplicado.RegistroAnimal.DTO.AnimalDTO;
import org.serratec.projetoaplicado.RegistroAnimal.DTO.CarteiraMostrarDTO;
import org.serratec.projetoaplicado.RegistroAnimal.DTO.UsuarioMostrarDTO;
import org.serratec.projetoaplicado.RegistroAnimal.exception.AnimalException;
import org.serratec.projetoaplicado.RegistroAnimal.exception.UsuarioException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarteiraService {
	
	@Autowired
	AnimalService animalService;
	
	@Autowired
	UsuarioService usuarioService;
	
	public CarteiraMostrarDTO gerarCarteirinha(Integer idAnimal) throws UsuarioException, AnimalException {
		CarteiraMostrarDTO carteiraMostrarDTO = new CarteiraMostrarDTO();
		AnimalDTO animal = animalService.buscarPorId(idAnimal);
		UsuarioMostrarDTO usuario = usuarioService.buscarPorId(animal.getIdUsuario());
		carteiraMostrarDTO.setNomeUsuario(usuario.getNomeCompleto());
		carteiraMostrarDTO.setNomeAnimal(animal.getNomeAnimal());
		carteiraMostrarDTO.setEspecie(animal.getEspecie());
		carteiraMostrarDTO.setSexo(animal.getSexo());
		carteiraMostrarDTO.setRaca(animal.getRaca());
		carteiraMostrarDTO.setDataNascimento(animal.getDataNascAnim());;
		carteiraMostrarDTO.setVacinaMultipla(animal.getVacinaMultipla());
		carteiraMostrarDTO.setVacinaAntiRabica(animal.getVacinaAntiRabica());
		carteiraMostrarDTO.setChip(animal.getChip());
		carteiraMostrarDTO.setFotoAnimal(animal.getFotoAnimal());
		carteiraMostrarDTO.setRga(animal.getRga());
//		carteiraMostrarDTO.setQrcode(); criar
		
		return carteiraMostrarDTO;
	}
	
	Integer calcularIdade(LocalDate data) {
		LocalDate now = LocalDate.now();
		return now.getYear() - data.getYear();
	}

}
