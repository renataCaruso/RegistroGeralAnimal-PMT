package org.serratec.projetoaplicado.RegistroAnimal.controller;

import java.io.IOException;
import java.util.List;

import javax.mail.MessagingException;

import org.serratec.projetoaplicado.RegistroAnimal.DTO.UsuarioDTO;
import org.serratec.projetoaplicado.RegistroAnimal.DTO.UsuarioMostrarDTO;
import org.serratec.projetoaplicado.RegistroAnimal.exception.UsuarioException;
import org.serratec.projetoaplicado.RegistroAnimal.service.UsuarioService;
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
@RequestMapping("/usuario")
public class UsuarioController {

	@Autowired
	UsuarioService usuarioService;

//	@Autowired
//	private ImagemService imagemService;

	@PostMapping("/salvar")
	public ResponseEntity<Void> salvar(@RequestBody UsuarioDTO usuarioDTO) throws UsuarioException, MessagingException, IOException {
		usuarioService.salvar(usuarioDTO);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}


	@PutMapping("/atualizar/{idUsuario}")
	public ResponseEntity<String> atualizar(@PathVariable Integer idUsuario, @RequestBody UsuarioDTO usuarioDTO)
			throws UsuarioException {
		return new ResponseEntity<>(usuarioService.atualizar(idUsuario, usuarioDTO), HttpStatus.ACCEPTED);
	}

	@DeleteMapping("/delete/{idUsuario}")
	public ResponseEntity<String> delete(@PathVariable Integer idUsuario) throws UsuarioException {
		usuarioService.deletar(idUsuario);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@GetMapping("/lista")
	public ResponseEntity<List<UsuarioMostrarDTO>> buscarTodos() {
		return ResponseEntity.ok(usuarioService.buscarTodos());
	}

	// Buscar foto
	@GetMapping("/foto/{idUsuario}/")
	public ResponseEntity<String> buscarFoto(@PathVariable Integer idUsuario) {
		return new ResponseEntity<>(usuarioService.buscarFotoPorUsuario(idUsuario), HttpStatus.OK);
	}

	// Buscar comprovante
	@GetMapping("/comprovante/{idUsuario}/")
	public ResponseEntity<String> buscarComprovante(@PathVariable Integer idUsuario) {
		return new ResponseEntity<>(usuarioService.buscarComprovantePorUsuario(idUsuario), HttpStatus.OK);
	}
	@GetMapping("/buscar-por-id/{idUsuario}")
	public ResponseEntity<UsuarioMostrarDTO> buscarPorId(@PathVariable Integer idUsuario) {
		try {
			return ResponseEntity.ok(usuarioService.buscarPorId(idUsuario));
		} catch (UsuarioException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/buscar-por-email/{email}")
    public ResponseEntity<UsuarioMostrarDTO> buscarPorEmail(@PathVariable String email) {
        try {
            return ResponseEntity.ok(usuarioService.buscarPorEmail(email));
        } catch (UsuarioException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

//	@PostMapping(path= "/foto", consumes= {MediaType.MULTIPART_FORM_DATA_VALUE})
//	@ResponseStatus(HttpStatus.CREATED)
//	public UsuarioMostrarDTO inserir(@Valid @RequestPart("usuario") UsuarioDTO usuarioDTO, @RequestParam ("arquivo") MultipartFile arquivo) throws IOException {
//		UsuarioMostrarDTO dto = usuarioService.inserirService(usuarioInserirDTO, arquivo);
//		return dto;
//    }

//	@PostMapping("/imagens")
//	public ResponseEntity<String> salvarImagens(@RequestBody UsuarioImagensDTO usuarioImagensDTO) {
//		usuarioService.salvarImagens(usuarioImagensDTO);
//		return new ResponseEntity<String>("Imagens atualizadas.", HttpStatus.ACCEPTED);
//	}
}
