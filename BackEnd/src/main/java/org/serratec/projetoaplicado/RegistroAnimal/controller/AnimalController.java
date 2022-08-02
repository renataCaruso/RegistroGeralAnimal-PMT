package org.serratec.projetoaplicado.RegistroAnimal.controller;

import java.util.List;

import org.serratec.projetoaplicado.RegistroAnimal.DTO.AnimalDTO;
import org.serratec.projetoaplicado.RegistroAnimal.DTO.AnimalMostrarDTO;
import org.serratec.projetoaplicado.RegistroAnimal.DTO.AnimalPorUsuarioDTO;
import org.serratec.projetoaplicado.RegistroAnimal.exception.AnimalException;
import org.serratec.projetoaplicado.RegistroAnimal.service.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/animal")
public class AnimalController {

	@Autowired
	AnimalService animalService;

//	@Autowired
//	private ImagemService imagemService;

	@PostMapping("/salvar")
	public ResponseEntity<Void> salvar(@RequestBody AnimalDTO animalDTO) throws AnimalException {
		animalService.salvar(animalDTO);
		return new ResponseEntity<>(HttpStatus.CREATED);

	}

	@GetMapping("/buscar/{idAnimal}")
	public ResponseEntity<AnimalDTO> buscarPorId(@PathVariable Integer idAnimal) {
		try {
			return ResponseEntity.ok(animalService.buscarPorId(idAnimal));
		} catch (AnimalException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}

	@PutMapping("/atualizar/{idAnimal}")
	public ResponseEntity<String> atualizar(@PathVariable Integer idAnimal, @RequestBody AnimalDTO animalDTO)
			throws AnimalException {
		return new ResponseEntity<>(animalService.atualizar(idAnimal, animalDTO), HttpStatus.ACCEPTED);
	}

	@DeleteMapping("/delete/{idAnimal}")
	public ResponseEntity<String> delete(@PathVariable Integer idAnimal) throws AnimalException {
		animalService.deletar(idAnimal);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@GetMapping("/lista")
	public ResponseEntity<List<AnimalDTO>> buscarTodos() {
		return ResponseEntity.ok(animalService.buscarTodos());
	}
	
	@GetMapping("/listarAnimais/{idUsuario}")
	public ResponseEntity<List<AnimalPorUsuarioDTO>> buscarAnimaisPorIdUsuario(Integer idUsuario) {
		return ResponseEntity.ok(animalService.buscarAnimaisPorIdUsuario(idUsuario));
	}
	
	// Buscar foto
	@GetMapping("/foto/{idAnimal}/")
	public ResponseEntity<String> buscarFoto(@PathVariable Integer idAnimal) {
		return new ResponseEntity<>(animalService.buscarFotoPorAnimal(idAnimal), HttpStatus.OK);
	}

	// Buscar carteira vacinacao
	@GetMapping("/carteira/{idAnimal}/")
	public ResponseEntity<String> buscarCarteiraVacinacao(@PathVariable Integer idAnimal) {
		return new ResponseEntity<>(animalService.buscarCarteiraVacinacao(idAnimal), HttpStatus.OK);
	}
	
	@GetMapping("/filtro/{rga}")
	public ResponseEntity<AnimalMostrarDTO> buscarPorRga(@PathVariable  String rga) {
		try {
			return ResponseEntity.ok(animalService.buscarPorRga(rga));
		} catch (AnimalException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}
	
//	@PostMapping("/salvar-lista")
//	public ResponseEntity<Void> salvarLista(@RequestBody List<AnimalDTO> listaAnimalDTO) {
//		animalService.salvarListaAnimal(listaAnimalDTO);
//		return new ResponseEntity<>(HttpStatus.CREATED);
//	}

	// Buscar por foto
////			@GetMapping("/{idAnimal}/imagem")
//	public ResponseEntity<byte[]> listarPorFoto(@PathVariable Integer idAnimal) {
//		Imagem imagem = imagemService.findById(idAnimal);
//		HttpHeaders headers = new HttpHeaders();
//		headers.add("content-type", imagem.getMimetype());
//		headers.add("content-length", String.valueOf(imagem.getDados().length));
//		return new ResponseEntity<>(imagem.getDados(), headers, HttpStatus.OK);
//	}

//	@PutMapping("/imagens")
//	public ResponseEntity<String> atualizarImagens(@RequestBody AnimalImagensDTO animalImagensDTO) {
//		animalService.salvarImagens(animalImagensDTO);
//		return new ResponseEntity<String>("Imagens atualizadas.", HttpStatus.ACCEPTED);
//	}
}
