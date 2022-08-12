// tiposDeDatos

// PRIMITIVOS String, Number, Boolean, Null y Undefined

let myAge = "30"; // Number // BigInt + NaN
let myName = "Víctor"; // String
let myEntireName = `Hola soy ${myName}`;
// let miNombreCompleto = `<h1>Hola soy ${miNombre}</h1>`;

console.log(miNombreCompleto);

let adult = true; // boolean
let underAge = false; // boolean
let variableNotAssignedValue = undefined; // undefined -> global scope
let absenceOfAnyObjectValue = null; // null

    typeof undefined // typeof -> operador unario
    typeof null 

NaN 

// Tipo de dato 'objeto'

let car = {
    engine: true,
    color: 'black',
    tires: 4,
    doors: 3,
    passengers: {
        victor: {
            age: 30,
            license: false
        },
        aldo: {
            age: 30,
            license: true
        }
    }

}; 

console.log(car.passengers.victor.license);
console.log(car['passengers']['victor']['license']);

let miniCooper = car; // Esta variable está apuntando a la referencia.

miniCooper.engine = 'Electric';

console.log(miniCooper.engine);

// {This variable is gonna be an object}
// Las variables que continen objetos guardan REFERENCIAS, no guardan valores como tal.

// ¿Cómo accedemos a los valores?

let array = ['string', 10, true, {}, []]; // Las variables que almacenan objetos guardan la REFERENCIA.

let fruitCart = ['apples', 'peaches', 'grapes'];
console.log(fruitCart.length);
console.log(fruitCart[0]);




















// Error: Cannot read property ‘propertyName’ of null/undefined -> Look for.


// let miEdad = 30;
// let miNombre = "Víctor";
// let miNombreCompleto = `Hola soy Aldo' -> `Hola soy ${miNombre}` -> expresión de JS-> es una sentencia.

/* `` backticks -> nos permite generar un string más complejo -> interpolación.
Interpolación: tomar valores de variables y meterlos en un string.

Utilizar el valor de una variable para generar una nueva expresión en JS.
*/