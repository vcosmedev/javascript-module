
/* 1 - Crear una función que altere el valor de una variable global cada vez que se ejecuta (no debe retornar nada) */

// Función Declarativa

let globalVariable = 0;

function myFirstFunction(value) {
    globalVariable = value + 1; // ¿Simplificar esta formulación? ¿Sintaxis '+= value'?
    console.log(globalVariable)
}

myFirstFunction(5);


/* 2 - Crear una función que reciba un parámetro de tipo número y regrese 'true' si el parámetro es un número par o
false si se trata de un número impar. */

function mySecondFunction(number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

mySecondFunction(10);


