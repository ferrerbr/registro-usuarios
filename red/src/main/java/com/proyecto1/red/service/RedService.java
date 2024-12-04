package com.proyecto1.red.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto1.red.exceptions.UserAlreadyExistsException;
import com.proyecto1.red.model.User;
import com.proyecto1.red.repository.RedRepository;

@Service
public class RedService {
	//Atributos
	private final  RedRepository redRepository;
	//Constructor  con inyeccion de dependencias
	@Autowired
	public RedService(RedRepository redRepository) {
		this.redRepository = redRepository;
		
		
	}
	
	//Metodo para crear un nuevo usuario
	public User createUser(User newUser) {
		if(redRepository.existsByCorreo(newUser.getCorreo() ) ){
			throw new UserAlreadyExistsException("El usuario " + newUser.getCorreo() + " Ya existe");
		}

		return redRepository.save(newUser);
	}
	
	//Metodo paravaerifiacar si el usuario existe y si la constraseña conincide
	public boolean authenticateUser(String correo, String contrasena) {
		Optional<User> userOpt = redRepository.findByCorreo(correo);
		
		//si no encuentra el usuario 
		if(!userOpt.isPresent()) {
			return false;
		}
		User user =userOpt.get();
		//comparamos la contraseña
		return user.getContrasena().equals(contrasena);
	}
	
	
	//Metodo para traer la infromacion del usuario por su correo 
	public User getUserBycorreo(String correo) {
		return redRepository.findBycorreo(correo);
	}
	
	
	//Metodo para guardar usuario actualizado
	public User actualizarUsuario(User user) {
		return redRepository.save(user);
	}
	
	//Metodo para eliminar un usuario por su correo y constraseña
	
	public String eliminarUsuario(String email, String password) {
		Optional<User> userOptional = redRepository.findByCorreo(email);
		
		if(userOptional.isPresent()) {
			User user =userOptional.get();
			if(user.getContrasena().equals(password)) {
				redRepository.delete(user);
				return "Usuario eliminado con éxito";
			}else {
				return "Contraseña incorrecta";
			}
		}else {
			return "Usuario no encontrado";
			
		}
	}
	
	

}
