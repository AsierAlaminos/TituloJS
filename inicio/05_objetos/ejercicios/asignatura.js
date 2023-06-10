//clase que represente una asignatura
//nombre, siglas, profesor, curso (1, 2), horas, conocimientos (String[])
//mostrar datos

//crear todas las asignaturas de 1 y meterlas en un dam[]
//crear todas las asignaturas de 2 como JSON y meterlas en dam2[]


class Asignatura{
	nombre;
	siglas;
	profesor;
	curso;
	horas;
	conocimientos;
	
	constructor(nombre, siglas, profesor, curso, horas, conocimientos){
		this.nombre = nombre;
		this.siglas = siglas;
		this.profesor = profesor;
		this.curso = curso;
		this.horas = horas;
		this.conocimientos;
	}

	mostrarDatos(){
		console.log(`Asignatura:\nNombre: ${this.nombre}\nSiglas: ${this.siglas}\nProfesor: ${this.profesor}\nCurso: ${this.curso}\nHoras: ${this.horas}\nConocimientos: `);
		this.conocimientos.forEach(e => {
			console.log(e);
		});
	}

	get getCon(){
		return this.conocimientos;
	}
}


programacion = new Asignatura("Programación", "PRO", "Borja", 1, "8", ["programación", "java"]);
programacion2 = new Asignatura("Programación1", "PRO", "Borja", 1, "8", ["programación", "java", "con1", "con2"]);
programacion3 = new Asignatura("Programación", "PRO", "Borja", 1, "8", ["programación", "java"]);
programacion4 = new Asignatura("Programación2", "PRO", "Borja", 1, "8", ["programación", "java", "con3", "con4"]);

let interfaces = {
	nombre: "Desarrollo de interfaces",
	siglas: "DI",
	profesor: "Borja",
	curso: "dam2",
	horas: 7,
	conocimientos: ["Desarrollo", "Interfaces"],
}

let interfaces2 = {
	nombre: "Desarrollo de interfaces1",
	siglas: "DI",
	profesor: "Borja",
	curso: "dam2",
	horas: 7,
	conocimientos: ["Desarrollo", "Interfaces", "con5", "con6"],
}

let interfaces3 = {
	nombre: "Desarrollo de interfaces",
	siglas: "DI",
	profesor: "Borja",
	curso: "dam2",
	horas: 7,
	conocimientos: ["Desarrollo", "Interfaces"],
}
