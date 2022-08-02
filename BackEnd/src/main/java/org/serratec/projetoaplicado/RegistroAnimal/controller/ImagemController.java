package org.serratec.projetoaplicado.RegistroAnimal.controller;

import java.io.IOException;

import org.serratec.projetoaplicado.RegistroAnimal.model.Imagem;
import org.serratec.projetoaplicado.RegistroAnimal.service.ImagemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class ImagemController {
	
	@Autowired
	ImagemService service;
	
	@PostMapping(path = "/imagem", consumes= {MediaType.MULTIPART_FORM_DATA_VALUE})
	public ResponseEntity<Integer> salvar(@RequestParam MultipartFile arquivo) throws IOException {
		Imagem img = service.create(arquivo);
		return new ResponseEntity<>(img.getIdImagem(), HttpStatus.CREATED);
	}

}
