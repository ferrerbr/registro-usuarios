package com.proyecto1.red.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto1.red.dto.InicioSesion;
import com.proyecto1.red.exceptions.UsuarioExistente;
import com.proyecto1.red.model.Usuario;
import com.proyecto1.red.repository.Repositorio;

@Service 
public class Servicio {
	//atributos 
	 private Repositorio repositorio;
	
	//Metodo constructor con inyeccion de dependencias
	 @Autowired
	public Servicio(Repositorio respositorio) {
		this.repositorio = respositorio;
	}

	 
	 //Metodo para Crear un nuevo usuario
	 public Usuario nuevoUsuarioServicio(Usuario usuario) {
		 Optional<Boolean> usuarioOpt = repositorio.existsByCorreo(usuario.getCorreo());
		 if (usuarioOpt.get()) {
			 throw new UsuarioExistente("el usuario con el correo "+ usuario.getCorreo() + " tiene una cuenta existente");
		 }
		 return repositorio.save(usuario);
	 }
	 
	 //Metodo para el inicio de sesion : este metodo validara si existe un usuario con el correo y si este existe comorara la contraseña ingresada con la contraseña que le pertenese al usuario ya istanciado 
	 public Boolean incioSesionServicio(InicioSesion inicioSesion) {
		 Optional<Usuario> usuarioOpt = repositorio.findByCorreo(inicioSesion.getCorreo());
		 if(usuarioOpt.isPresent()) {
			 Usuario contrasena = usuarioOpt.get();
			 return contrasena.getContrasena().equals(inicioSesion.getContrasena());
		 }
			 return false;
		 
	 }
	 
	 //Método para optener un usuario por el correo
	 public Usuario getUsuarioServicio(String correo) {
		 Usuario usuario = repositorio.findByCorreo(correo).get();
		 return usuario;
	 }
	 
	 //Metodo para eliminar un usuario verificando su correo y contraseña
	 public Boolean eliminarServicio(InicioSesion inicioSesion) {
		 Usuario eliminar = repositorio.findByCorreo(inicioSesion.getCorreo()).get();
		 
		  if(eliminar.getContrasena().equals(inicioSesion.getContrasena())) {
			 repositorio.delete(eliminar);
			 return true;
		 }
		  return false;
		 
	 }
	 
	 //Método para Editar totalmente a un usuario
	 public Usuario editarServicio(Usuario nuevoUsuario) {
		 Usuario actual = repositorio.findByCorreo(nuevoUsuario.getCorreo()).get();
		 actual.setNombre(nuevoUsuario.getNombre());
		 actual.setApellido(nuevoUsuario.getApellido());
		 actual.setFechaNacimiento(nuevoUsuario.getFechaNacimiento());
		 actual.setDireccion(nuevoUsuario.getDireccion());
		 return repositorio.save(actual);
	 }
}
