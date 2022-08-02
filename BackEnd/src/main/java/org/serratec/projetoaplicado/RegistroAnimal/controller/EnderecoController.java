package org.serratec.projetoaplicado.RegistroAnimal.controller;

import java.util.List;

import org.serratec.projetoaplicado.RegistroAnimal.DTO.EnderecoMostrarDTO;
import org.serratec.projetoaplicado.RegistroAnimal.exception.EnderecoException;
import org.serratec.projetoaplicado.RegistroAnimal.service.EnderecoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/endereco")
public class EnderecoController {

	@Autowired
	EnderecoService enderecoService;

	@PostMapping("/salvar")
	public ResponseEntity<Void> salvar(@RequestBody EnderecoMostrarDTO enderecoMostrarDTO) throws EnderecoException {
		enderecoService.salvar(enderecoMostrarDTO);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@GetMapping("/buscar/{idEndereco}")
	public ResponseEntity<EnderecoMostrarDTO> buscarPorId(@PathVariable Long idEndereco) {
		try {
			return ResponseEntity.ok(enderecoService.buscarPorId(idEndereco));
		} catch (EnderecoException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PutMapping("/atualizar/{idEndereco}")
	public ResponseEntity<Void> atualizar(@PathVariable Long idEndereco, @RequestBody EnderecoMostrarDTO enderecoDTO)
			throws EnderecoException {
		enderecoService.atualizar(idEndereco, enderecoDTO);
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

	@DeleteMapping("/delete/{idEndereco}")
	public ResponseEntity<Void> delete(@PathVariable Long idEndereco) {
		enderecoService.delete(idEndereco);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@GetMapping
	public ResponseEntity<List<EnderecoMostrarDTO>> listaTodos() {
		return ResponseEntity.ok(enderecoService.todosEnderecos());
	}
}