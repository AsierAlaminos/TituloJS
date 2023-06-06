
let confirmacion;
do{
	let numero1 = prompt("Introduce un número");
	let confirm1 = isNaN(numero1);
	let numero2 = prompt("Introduce otro número");
	let confirm2 = isNaN(numero2);
	if (confirm1 || confirm2){
		alert("Por favor introduce los datos de forma correcta");
	}else{
		alert(`El resultado es:\nSuma es ${parseInt(numero1) + parseInt(numero2)}\nResta es ${parseInt(numero1) - parseInt(numero2)}\nMultiplicación es ${parseInt(numero1) * parseInt(numero2)}\nDivisión es ${parseInt(numero1) / parseInt(numero2)}\nMódulo es ${parseInt(numero1) % parseInt(numero2)}`);
	}
	confirmacion = confirm("¿Quieres volver a operar?");
}while (confirmacion);
