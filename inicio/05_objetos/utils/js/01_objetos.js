//Clases y objetos

class Persona{
	nombre;
	apellido;
	telefono;
	correo;

	constructor(nombre, apellido, telefono, correo){
		this.nombre = nombre;
		this.apellido = apellido;
		this.telefono = telefono;
		this.correo = correo;
	}

	mostrarDatos(){
		console.log(`Los datos de la persona son:\nNombre: ${this.nombre}\nApellido: ${this.apellido}\nTelefono: ${this.telefono}\nCorreo: ${this.correo}`);
	}

	set setNombre(p){
		this.nombre = p;
	}

	get getNombre(){
		return this.nombre;
	}
}

let personaJson = {
	nombre: "Asier",
	apellido: "Alaminos",
	correo: "correo@correo.com",
}

console.log(personaJson["nombre"]);

persona = new Persona("Asier", "Alaminos", 1234, "correo@correo.com");
persona.mostrarDatos();
persona.setNombre = "Juan";
console.log(persona.getNombre);
