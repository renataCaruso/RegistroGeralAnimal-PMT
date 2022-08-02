package org.serratec.projetoaplicado.RegistroAnimal.service;

import java.io.IOException;
import java.util.Base64;
import java.util.Optional;

import org.serratec.projetoaplicado.RegistroAnimal.model.Imagem;
import org.serratec.projetoaplicado.RegistroAnimal.repository.ImagemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ImagemService {
	
	@Autowired
	private ImagemRepository imagemRepository;
	
	@Transactional
	public Imagem create (MultipartFile arquivo) throws IOException{
		Imagem imagem = new Imagem();
		imagem.setNomeImagem(arquivo.getName());
		imagem.setMimetype(arquivo.getContentType());
		imagem.setDados(arquivo.getBytes());
		return imagemRepository.save(imagem);
	}
	
	
	public Imagem findById(Integer idImagem) {
		Optional<Imagem> imagem = imagemRepository.findById(idImagem);
		if(!imagem.isPresent()) {
			return null;
		}
		return imagem.get();
	}
	
	public byte[] decodeImage(String imageString) {
		return Base64.getDecoder().decode(imageString.split(",")[1]);
	}
	
	public String encodeImage(byte[] imageByte) {
		return "data:image/jpeg;base64," + Base64.getEncoder().encodeToString(imageByte);
	}
}

