package com.proyecto1.red.exceptions;

public class UsuarioExistente extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public UsuarioExistente(String mensaje) {
		super(mensaje);
	}
	

}
