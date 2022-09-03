
import greeting from './modul.js';

greeting();

// Pasar una función como argumento(callback) de otra función
function farewall(callback) {
    callback();
}

farewall(greeting);

// Ejectura una función




// Retornar una función dentro de otra función
function print() {
    return greeting;
}

print(greeting);



// Asignar una función como valor de una variable

let assignedFunction = greeting;

