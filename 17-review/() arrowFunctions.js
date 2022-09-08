// Functions expressions


// Anonymous function

let anonymousFunction = function(num1, num2) {
    return num1 + num2;
}

console.log(anonymousFunction) // Expected output -> [Function: anonymousFunction]
console.log(anonymousFunction(5, 5)); // Expected output -> 10 

// Se ejecutar una 'variable' como una función ya que previamente se ASIGNÓ a dicha VARIABLE una FUNCIÓN (ejemplo anterior)

// También se puede asignar la EJECUCIÓN de una función a una variable. Ejemplo:

function welcome (user) {
    return `¡Hola ${user}! ¡Bienvenid@ a nuestra plataforma!`;
}

const welcomeUser = welcome('Víctor');

console.log(welcomeUser);


// Arrow function
// Función anónima - Alternativa compacta a una expresión de función

const sum = (num1, num2) => {
    return num1 + num2;
}

console.log(sum(5, 4));

// Condiciones arrow-function
    // Si se tiene un solo parámetro, se puede omitir el paréntesis del parámetro

        const parameter = word => {
            return word.toUpperCase();
        }

        console.log(parameter('hola'));

    // Si se tiene más de un parámetro, los paréntesis sí son obligatorios

    // Return implícito -> Solo aplica para las arrow-functions -> Lo que ejecuta la función, si se puede resumir en una sola línea, se pueden omitir llaves y return

        const substraction = (num1, num2) => {
            return num1 - num2;
        }

        // La función anterior se puede reducir a lo siguiente:

        const substractionTwo = (num1, num2) => num1 - num2; // return implícito -> num1 - num2

/*-----------------------------------------------------------------------------------------------*/

// Arrow functions

function addition(num1, num2) {
    return num1 + num2;
}
// Example 1
let add = addition(10, 10);
console.log(add);

// Example 2
let addition = (num1, num2) => num1 + num2; // return implícito
let add2 = addition(10, 10);
console.log(add2);

// Concatena dos cadenas de cadena de caracteres
let concatenate = (name, surname) => name + surname;
let fullName = concatenate('Víctor ', 'Cosme');
console.log(fullName);

// Example 3
let addition = (num1, num2) => {
    const PI = 3.1416;
    let result = num1 + num2 + PI;
    return result;
}

let result = addition(25, 30);
console.log(result);


