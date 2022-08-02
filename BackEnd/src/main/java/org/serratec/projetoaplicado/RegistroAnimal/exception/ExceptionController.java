package org.serratec.projetoaplicado.RegistroAnimal.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

public class ExceptionController {

	@ExceptionHandler(value = { UsuarioException.class })
	protected ResponseEntity<Object> naoEncontrado(UsuarioException ex) {
		APIError apiError = new APIError(HttpStatus.BAD_REQUEST);
		apiError.setMessage(ex.getMessage());
		apiError.setDebugMessage(ex.getLocalizedMessage());
		return buildResponseEntity(apiError);
	}

	@ExceptionHandler(value = { AnimalException.class })
	protected ResponseEntity<Object> naoEncontrado(AnimalException ex) {
		APIError apiError = new APIError(HttpStatus.BAD_REQUEST);
		apiError.setMessage(ex.getMessage());
		apiError.setDebugMessage(ex.getLocalizedMessage());
		return buildResponseEntity(apiError);
	}

	@ExceptionHandler(value = { EnderecoException.class })
	protected ResponseEntity<Object> naoEncontrado(EnderecoException ex) {
		APIError apiError = new APIError(HttpStatus.BAD_REQUEST);
		apiError.setMessage(ex.getMessage());
		apiError.setDebugMessage(ex.getLocalizedMessage());
		return buildResponseEntity(apiError);

	}

	private ResponseEntity<Object> buildResponseEntity(APIError apiError) {
		return new ResponseEntity<>(apiError, apiError.getStatus());
	}

}
