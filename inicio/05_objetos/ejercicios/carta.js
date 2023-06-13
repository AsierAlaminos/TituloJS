class Carta{
	valor;
	imagen;
	representacion;

	constructor(repre, img, val){
		this.representacion = repre;
		this.imagen = img;
		this.valor = val;
	}

	get getValor(){
		return this.valor;
	}

	get getImagen() {
		return this.imagen;
	}

	get getRepre(){
		return this.representacion;
	}
}
