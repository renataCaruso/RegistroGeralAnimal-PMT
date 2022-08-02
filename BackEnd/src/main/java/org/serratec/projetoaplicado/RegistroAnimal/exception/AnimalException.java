package org.serratec.projetoaplicado.RegistroAnimal.exception;

public class AnimalException extends Exception {

	private static final long serialVersionUID = 1L;

	public AnimalException() {
		super();
	}

	public AnimalException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public AnimalException(String message, Throwable cause) {
		super(message, cause);
	}

	public AnimalException(String message) {
		super(message);
	}

	public AnimalException(Throwable cause) {
		super(cause);
	}

}
