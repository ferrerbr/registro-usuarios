package com.proyecto1.red.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proyecto1.red.model.Usuario;

public interface Repositorio  extends JpaRepository<Usuario,Long>{
	
	//Crear un metodo paraBuscar un correo existente
	Optional<Boolean> existsByCorreo(String correo);

	
	//Metodo para optener un usuario por su correo 
	Optional<Usuario> findByCorreo(String correo);
}
