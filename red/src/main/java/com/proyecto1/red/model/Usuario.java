package com.proyecto1.red.model;

import java.time.LocalDate;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Usuario", schema = "db")
public class Usuario {
	//Atributos 
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	@Column(name ="id")
	private Long id;
	
	@Column(name = "nombre", length = 25, nullable = false, unique = false)
	private String nombre;
	
	@Column(name = "apellido", length = 25, nullable = false, unique = false)
	private String apellido;
	
	@Column(name = "correo", length = 25, nullable = false , unique = true )
	private String correo;
	
	@Column(name = "contrasena", length = 25, nullable = false, unique = false )
	private String contrasena;
	
	@Column(name = "fecha_nacimiento" , nullable = false , unique = false)
	private LocalDate fechaNacimiento;
	
	@Column(name = "direccion", length = 70, nullable = false , unique = false )
	private String direccion;
	
	@Column(name = "foto_perfil", length = 500, nullable = true , unique = false )
	private String fotoDePerfil;
	
	//Constructor vacio para JPA
	public Usuario() {
		
	}

	//Constructor lleno
	public Usuario(Long id, String nombre, String apellido, String correo, String contrasena, LocalDate fechaNacimiento,
			String direccion, String fotoDePerfil) {
		this.id = id;
		this.nombre = nombre;
		this.apellido = apellido;
		this.correo = correo;
		this.contrasena = contrasena;
		this.fechaNacimiento = fechaNacimiento;
		this.direccion = direccion;
		this.fotoDePerfil = fotoDePerfil;
	}
	

	//Getters y setters
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

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

	public LocalDate getFechaNacimiento() {
		return fechaNacimiento;
	}

	public void setFechaNacimiento(LocalDate fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getFotoDePerfil() {
		return fotoDePerfil;
	}

	public void setFotoDePerfil(String fotoDePerfil) {
		this.fotoDePerfil = fotoDePerfil;
	}

	//Metodo toString
	@Override
	public String toString() {
		return "Usuario [id=" + id + ", nombre=" + nombre + ", apellido=" + apellido + ", correo=" + correo
				+ ", contraseña=" + contrasena + ", fechaNacimiento=" + fechaNacimiento + ", direccion=" + direccion
				+ ", fotoDePerfil=" + fotoDePerfil + "]";
	}
	//Metodo hashCode
	@Override
	public int hashCode() {
		return Objects.hash(apellido, contrasena, correo, direccion, fechaNacimiento, fotoDePerfil, id, nombre);
	}
	
	//Metodo equals
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Usuario other = (Usuario) obj;
		return Objects.equals(apellido, other.apellido) && Objects.equals(contrasena, other.contrasena)
				&& Objects.equals(correo, other.correo) && Objects.equals(direccion, other.direccion)
				&& Objects.equals(fechaNacimiento, other.fechaNacimiento)
				&& Objects.equals(fotoDePerfil, other.fotoDePerfil) && Objects.equals(id, other.id)
				&& Objects.equals(nombre, other.nombre);
	}
	
	

}
