package com.proyecto1.red.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proyecto1.red.model.User;

//Esta interfaz hererda los metodos  de la JpaRepository y toma dos parametros, el objeto model y el tipo de la PK
public interface RedRepository extends JpaRepository<User,Long> {

	//Aqui podremos realizar metodos de consulta (QUERIES) con JPQL
	
	//metodo para determinar si existe el correo en nuestro modelo
	boolean existsByCorreo(String correo);
	
	// metodo para determinar si existe el correo y la contraseña
	Optional<User> findByCorreo(String correo);
	
	User findBycorreo(String Correo);
}
