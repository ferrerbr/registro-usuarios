package com.proyecto1.red.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto1.red.dto.InicioSesion;
import com.proyecto1.red.exceptions.UsuarioExistente;
import com.proyecto1.red.model.Usuario;
import com.proyecto1.red.service.Servicio;

@RestController
@RequestMapping("/api/social")
//@CrossOriging("http:/www.direccion del cliente del cual se realizaran las peticiones.com")
public class Controlador {
	//Atributos 
	private Servicio servicio;
	
	//Mertodo cosntructor con inyecion de dependencias
	 public Controlador (Servicio servicio) {
		 this.servicio = servicio;
	 }
	 
	 //Mapear el metodo POST para crear un nuevo usuario
	 @PostMapping("/crear")
	 public ResponseEntity<Usuario> neuvoUsuarioControlador(@RequestBody Usuario usuarioNuevo){
		 
		 Usuario usuarioCreado = servicio.nuevoUsuarioServicio(usuarioNuevo);
		 System.out.println(usuarioNuevo);
		 return ResponseEntity.status(HttpStatus.CREATED).body(usuarioCreado);
		 
	 }
	 //manejador de la exception 
	 @ExceptionHandler(UsuarioExistente.class)
	 public ResponseEntity<String> handleUsuarioExistente(UsuarioExistente ex) {
		 return ResponseEntity.status(HttpStatus.CONFLICT).body(ex.getMessage());
	 }
	 
	 //Mapear el Metodo POST para hacer un inicio de sesion
	 @PostMapping("/inicioSesion")
	 public ResponseEntity<String> inicioSesionController(@RequestBody InicioSesion iniciosesion){
		 if(servicio.incioSesionServicio(iniciosesion)) {
			 return ResponseEntity.ok().body("Incio se sesion Exitoso");
		 }
		 return ResponseEntity.status(HttpStatus.CONFLICT).body("Credenciales incorrectas");
		 
	 }
	 
	 //Mapear el metodo GET  para obtener el usuario por el correo 
	 @GetMapping("/usuario/{correo}")
	 public ResponseEntity<Usuario> getUsuarioController(@PathVariable(name ="correo") String correo) {
		 return ResponseEntity.ok().body(servicio.getUsuarioServicio(correo));
	 }
	 
	 //Mapear el metodo DELETE para eliminar un usuario si la contraserña conincide 
	 @DeleteMapping("/eliminar")
	 public ResponseEntity<String> eliminarControlador(@RequestBody InicioSesion inicioSesion){
		 if(servicio.eliminarServicio(inicioSesion)) {
			 return ResponseEntity.ok("Usuario Eliminado con exito");
		 }
		 return ResponseEntity.status(HttpStatus.CONFLICT).body("Contraseña incorrecta");
	 }
	 
	 //Moppear el metodo PUT para  actalizar datos de un usuario
	 @PutMapping("/actualizar")
	 public ResponseEntity<Usuario> editarControlador(@RequestBody Usuario usuario){
		 return ResponseEntity.ok().body(servicio.editarServicio(usuario)); 
	 }
	 

}
