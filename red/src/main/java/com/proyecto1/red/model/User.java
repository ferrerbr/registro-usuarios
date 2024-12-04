package com.proyecto1.red.model;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name = "user",schema = "db")
public class User {
	
	/*Atributos*/
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name ="id")
	private Long id;
	
	@Column(name ="name", length = 30, nullable = false, unique = false)
	private String nombre;
	
	@Column(name ="last_name", length = 30, nullable = false, unique = false)
	private String apellido;
	
	@Column(name ="email", length = 30, nullable = false, unique = true)
	private String correo;
	
	@Column(name ="password", length = 20, nullable = false, unique = false)
	private String contrasena;
	
	@Column(name ="birth_date", nullable = false, unique = false)
	private LocalDate fechaNacimiento;
	
	@Column(name ="address", length = 60, nullable = false, unique = false)
	private String direccion;
	
	@Column(name ="profile_pic", nullable = true, unique = false)
	private byte[] fotoPerfil;
	
	@Column(name ="description", length = 450, nullable = true, unique = false)
	private String descripcion;
	
	/*constructor vacio para JPA*/
	public User() {
		
	}

	/*Constructor*/
	public User(Long id, String nombre, String apellido, String correo, String contrasena, LocalDate fechaNacimiento,
			String direccion, byte[] fotoPerfil, String descripcion) {
		this.id = id;
		this.nombre = nombre;
		this.apellido = apellido;
		this.correo = correo;
		this.contrasena = contrasena;
		this.fechaNacimiento = fechaNacimiento;
		this.direccion = direccion;
		this.fotoPerfil = fotoPerfil;
		this.descripcion = descripcion;
	}
	
	/*Geters y Setters*/

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

	public byte[] getFotoPerfil() {
		return fotoPerfil;
	}

	public void setFotoPerfil(byte[] fotoPerfil) {
		this.fotoPerfil = fotoPerfil;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	/*Metodo to String hash code y equals*/
	@Override
	public String toString() {
		return "User [id=" + id + ", nombre=" + nombre + ", apellido=" + apellido + ", correo=" + correo
				+ ", contrasena=" + contrasena + ", fechaNacimiento=" + fechaNacimiento + ", direccion=" + direccion
				+ ", fotoPerfil=" + Arrays.toString(fotoPerfil) + ", descripcion=" + descripcion + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + Arrays.hashCode(fotoPerfil);
		result = prime * result
				+ Objects.hash(apellido, contrasena, correo, descripcion, direccion, fechaNacimiento, id, nombre);
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		return Objects.equals(apellido, other.apellido) && Objects.equals(contrasena, other.contrasena)
				&& Objects.equals(correo, other.correo) && Objects.equals(descripcion, other.descripcion)
				&& Objects.equals(direccion, other.direccion) && Objects.equals(fechaNacimiento, other.fechaNacimiento)
				&& Arrays.equals(fotoPerfil, other.fotoPerfil) && Objects.equals(id, other.id)
				&& Objects.equals(nombre, other.nombre);
	}
	
	/**/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
