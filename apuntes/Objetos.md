## Clases

### Estructura

```js
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
		console.log(`Los datos de la persona son:
		\nNombre: ${this.nombre}
		\nApellido: ${this.apellido}
		\nTelefono: ${this.telefono}
		\nCorreo: ${this.correo}`);
	}

	set setNombre(p){
		this.nombre = p;
	}

	get getNombre(){
		return this.nombre;
	}
}
```

## Json

### Estructura

```js
let personaJson = {
	nombre: "Asier",
	apellido: "Alaminos",
	correo: "correo@correo.com",
}
```

**Los objetos en Json se pueden almacenar en variables

## Diferencias

### Comportamiento

**Las clases pueden tener un comportamiento especifico ya que pueden tener métodos creados para modificar su comportamiento mientras que los objetos en Json, por otro lado, son solo colecciones de datos y no tienen comportamiento asociado.

### Herencia

**Las clases permiten la herencia mientras que los objetos Json no.

---

[[Variables]]
[[Funciones]]