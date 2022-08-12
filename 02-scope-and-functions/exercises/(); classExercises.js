
// 1 - Crear una funcion que sume 2 números y regrese el resultado

// function suma () {}
// de expresión
let suma = function (numberOne,numberTwo) {
    let result = numberOne + numberTwo;
    return result;
}

console.log(suma(5,5));
console.log(`El resultado de la suma es: ${suma(5,5)}`);


/* 2 - Crear una funcion que recibe un nombre, que devuelve saludo 
por nombre y si no lo provee saludo simplemente amigo */
// function de expresión

// let greeting = function(greetings = "amigo"){
//     return `Hola ${greetings}`;
// }

// console.log(greetings('Fanny'));
// console.log(greetings());

// Arrow functions

let greeting = (greetings = "amigo") => {
    return `Hola ${greetings}`;
};

console.log(greetings('Víctor'));
console.log(greetings());