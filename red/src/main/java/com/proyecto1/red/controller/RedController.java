package com.proyecto1.red.controller;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto1.red.dto.LoginRequest;
import com.proyecto1.red.model.User;
import com.proyecto1.red.service.RedService;

@RestController
@RequestMapping("/api/red")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class RedController {
	private RedService redService;
	
	/*Constructor con inyeccion de dependencias */
	@Autowired
	public RedController (RedService redService) {
		this.redService = redService;
	}
	
	//Mapear el metodo POST  que reciba un nuevo objeto y el body del mismo(@RequestBody
	@PostMapping("/create")
	public User newUser(@RequestBody User user) {
		return redService.createUser(user);
	}

	
	//Mapear el metodo Get para la autenticacion del usuario 
	@PostMapping("/login")
	public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest){
		boolean authenticated = redService.authenticateUser(loginRequest.getCorreo(),loginRequest.getContrasena());
		
		if(authenticated) {
			return ResponseEntity.ok("Inicio de sesion exitoso");
			
		}else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales Incorrectas");
		}
		
	}
	
	
	//Mapear el metodo para obtener la informacion del ususario por su correo electronico
	@GetMapping("/{correo}")
	public ResponseEntity<User> getUserByCorreo(@PathVariable("correo") String correo){
		User user = redService.getUserBycorreo(correo);
		if (user != null) {
			return ResponseEntity.ok(user);
		}else {
			return ResponseEntity.notFound().build();
		}
	}
	
	
	//Mapear el metodo PUT para actualizar la iformacion del usuario
	@PutMapping("/{correo}")
	public ResponseEntity<User> updateUser(@PathVariable("correo") String correo,@RequestBody User updatedUser){
		User existingUser = redService.getUserBycorreo(correo);
		if (existingUser != null) {
			//Actualizar los datos del usuario
			existingUser.setNombre(updatedUser.getNombre());
            existingUser.setApellido(updatedUser.getApellido());
            existingUser.setFechaNacimiento(updatedUser.getFechaNacimiento());
            existingUser.setDireccion(updatedUser.getDireccion());
            existingUser.setDescripcion(updatedUser.getDescripcion());
            existingUser.setFotoPerfil(updatedUser.getFotoPerfil());
            redService.actualizarUsuario(existingUser);
            return ResponseEntity.ok(existingUser);//Devolver el usuario actualizado
		}else {
			return ResponseEntity.notFound().build();//si el usuario no existe
		}
	}
	
	//Mapear el metodo DELETE para eliminar un usuario por correo si su contraseña es correcta
	@DeleteMapping("/delete")
	public ResponseEntity<String> deleteUser(@RequestParam(name = "email") String email, @RequestParam(name = "password") String password){
		String result =redService.eliminarUsuario(email, password);
		if(result.equals("Usuario eliminado con éxito")) {
			return ResponseEntity.ok(result);
			
		}else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
		}
	}
	
	
}
