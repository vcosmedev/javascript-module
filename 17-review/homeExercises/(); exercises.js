// 13.- Crear una función que genere un arreglo a partir de una cadena de texto por ejemplo:
	let arreglo = generarArreglo('hola'); 
	console.log(arreglo) // ['h', 'o', 'l', 'a']

// 14.- Generar una función que sume todos los números que están dentro de una lista de números, por ejemplo:

	let suma = sumarElementos([1,2,3,4,5]); 
	console.log(suma) // 15


// 15.- Generar una función que quite todos los números que sean mayores al número 10 de una lista de números, por ejemplo:

	let nuevoArreglo = limpiarArreglo([11,12,3,4,15,5,8,10,20,1,2]); 
	console.log(nuevoArreglo) // [3,4,5,8,10,1,2]

/* 16.- generar una función que imprima el numero de día de la semana según el día que reciba, por ejemplo 

	recibimos 'lunes' entonces imprimira 0 
	recibimos 'martes' entonces imprimira 1 
	recibimos 'miércoles' entonces imprimira 2 
	recibimos 'jueves' entonces imprimira 3 
	recibimos 'viernes' entonces imprimira 4
	recibimos 'sábado' entonces imprimira 5
	recibimos 'domingo' entonces imprimira 6   
*/

// 17.- Generar una función para quitar un Koder de la lista de Koders:

	let listaKoders = ['Héctor', 'Manu', 'Jonathan', 'Fernando', 'Cintia', 'Fanny', 'Rodri', 'Rafa', 'Deni', 'Emanuel', 'Víctor', 'Benjamín', 'Xavy', 'Annie']; // Variable global

	quitarKoder('Manu');

	// ['Héctor', 'Jonathan', 'Fernando', 'Cintia', 'Fanny', 'Rodri', 'Rafa', 'Deni', 'Emanuel', 'Víctor', 'Benjamín', 'Xavy', 'Annie']; // Variable global

	quitarKoder('Rafa');

	// ['Héctor', 'Jonathan', 'Fernando', 'Cintia', 'Fanny', 'Rodri', 'Deni', 'Emanuel', 'Víctor', 'Benjamín', 'Xavy', 'Annie']; // Variable global

	quitarKoder('Xavy');

	// ['Héctor', 'Jonathan', 'Fernando', 'Cintia', 'Fanny', 'Rodri', 'Deni', 'Emanuel', 'Víctor', 'Benjamín', 'Annie']; // Variable global

	quitarKoder('Fanny');

	// ['Héctor', 'Jonathan', 'Fernando', 'Cintia', 'Rodri', 'Deni', 'Emanuel', 'Víctor', 'Benjamín', 'Annie']; // Variable global