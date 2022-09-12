/* 
Funciones pasadas como argumentos de otras funciones.
Podemos trabajar con funciones como si fueran cualquier otro tipo de valor.
*/

function calculator(num1, num2, callback){
    return callback(num1, num2);
}

// calculator(10, 10, (num1, num2)) => {
//     return(num1, num2);
// }

calculator(10,10, suma);

// Leguaje programación síncrono: ejecuta línea por línea, cada instrucción espera a la anterior para ejecutarse.
// Lenguaje programación asíncrono: no espera a las instrucciones diferidas y continúa con su ejecución.

// Crea una función que reciba 3 funciones diferentes y las ejecute en orden

let father = (childOne, childTwo, childThree) => {
    childOne();
    childTwo();
    childThree();
}

let functionOne = () => {
    console.log('Función child one')
}

let functionTwo = () => {
    console.log('Función child two')
}

let functionThree = () => {
    console.log('Función child three')
};


father(functionOne, functionTwo, functionThree);

// Concepto de referencia
// Síncrono y asíncrono

// Callbacks, utilizados con acciones asíncronas

// Petición, solicitud del clente al servidor, es una solicitud asíncrona

// Función que ayude a parsear los datos (tranformar, modificar)

// setTimeOut
/* What happens when setTimeout is 0? Solution(By Examveda Team) If you call setTimeout() with a time of 0 ms, 
the function you specify is not invoked right away. Instead, it is placed on a queue to be invoked 
“as soon as possible” after any currently pending event handlers finish running.*/

// ----------------------------------------------------------------------------------------------

// Arrow-function: forma de generar una función de manera compacta
// Las arrow-functions son expresiones (function expression)

const arrowFunction = () => {
    // Bloque de código
}

// Cuando tiene un único parámetro, se pueden omitir los paréntesis
// Forma muy completa de generar funcioens

const sayHi = (name, surname) => {
    console.log(`¡Hola, ${name} ${surname}!`);
    console.log(arguments);
}

sayHi('Víctor', 'Cosme');


function sayHiAgain(name, surname){
    console.log(`¡Hola, ${name} ${surname}!`);
    console.log(arguments);
    for(const argument of arguments){ // for ... of
        console.log(argument);
    }
}

sayHiAgain('Víctor.', 'Cosme');

// Callback: función que se puede pasar a otra función como argumento y que se ejecuta después
// de que se haya completado alguna o cualquier operación (no tiene por qué ser asíncrona).
// En algunos casos, un callback puede recibir argumentos.

function modify(array, callback) {
    // Se hace algo...
    array.push('Víctor');
    // Después de hacer algo...
    callback(array);
}

const names = ['Aldo', 'Annie', 'Fanny'];

modify(names, function(array) {
    console.log(`He modificado el array y ahora contiene ${array.length} elementos.`);
});

newArray = names;
console.log(newArray);