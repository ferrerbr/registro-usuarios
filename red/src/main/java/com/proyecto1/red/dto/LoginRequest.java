package com.proyecto1.red.dto;

public class LoginRequest {
	//atributos
	private String correo;
    private String contrasena;
    
    
    //getters y setters
	public String getCorreo() {
		return correo;
	}
	public void setCorreo(String correo) {
		this.correo = correo;
	}
	public String getContrasena() {
		return contrasena;
	}
	public void setContrasena(String contrasena) {
		this.contrasena = contrasena;
	}
    
}
