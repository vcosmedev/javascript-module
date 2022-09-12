let car = {
    doors: 3,
    color: 'black',
    electric: false,
    speedUp: () => {
        console.log('Estoy avanzando');
    }
}

// Atributos: guardan valores de tipo primitivo
// métodos => guardan funciones
// Las funciones pueden ser utilizadas para generar objetos. a este tipo de funciones se les denomina 'funciones constructoras'
// Existen métodos de string; ejemplo: split.

function Car() {
    this.doors = 5;
    this.color = 'gray',
    this.electric = false,
    // metodos son propiedades que almacenan funciones
    this.speedUp = () => {
        console.log('Estoy avanzando');
    } 
}


let miniCooper = new Car();
console.log(miniCooper);

let string = new String();
console.log(typeof string);

let fun = car.speedUp;

 function receivingCallback(fun){
    fun();
 }

 receivingCallback(fun)

function returnAnotherFunction(){
    let reference = () => {
        console.log('Hello!')
    };
    return reference
 }

 let result = returnAnotherFunction()();

 // Revisar concepto de referencias


