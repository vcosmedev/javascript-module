/*
Forma de generar una función de una manera compacta.
Arrow Functions, son expresiones, expresiones de funciones (function expression).
*/

/* const arrowFunction = () => {

};
*/

const sayHi = (name) => {
    console.log(`¡Hola, ${name}!`)
};

sayHi('Víctor');

// const sayHi = (prefix, name) => {
//     console.log(`¡Hola, ${prefix} ${name}!`)
// };

// sayHi('Sr.', 'Víctor');

const sayHiAgain = (prefix, name) => {
    console.log(`¡Hola, ${prefix} ${name}!`)
    console.log(arguments); // arguments
};

sayHiAgain('Sr.', 'Víctor');

