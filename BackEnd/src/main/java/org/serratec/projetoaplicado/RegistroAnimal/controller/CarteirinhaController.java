package org.serratec.projetoaplicado.RegistroAnimal.controller;

import org.serratec.projetoaplicado.RegistroAnimal.DTO.CarteiraMostrarDTO;
import org.serratec.projetoaplicado.RegistroAnimal.exception.AnimalException;
import org.serratec.projetoaplicado.RegistroAnimal.exception.UsuarioException;
import org.serratec.projetoaplicado.RegistroAnimal.service.CarteiraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController("/carteirinha")
public class CarteirinhaController {
	
	@Autowired
	CarteiraService service;
	
	@GetMapping("/{idAnimal}")
	public ResponseEntity<CarteiraMostrarDTO> gerarCarteirinha(@PathVariable Integer idAnimal) throws UsuarioException, AnimalException {
		return ResponseEntity.ok(service.gerarCarteirinha(idAnimal));
	}

}
