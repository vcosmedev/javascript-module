
// 1- Global scope ('United Nations')
// Cuando declaramos fuera de toda función o bloque de código
// La variable globalVariable se podrá usar a lo lagro de todo nuestro programa

let globalVariable = 15;

function greetings() {

// 2- Local scope

    let localVariable = 10;
    console.log(globalVariable, localVariable); // 15 10
}

// greetings();

// Function scope (United States)
    /*Accesibles dentro de toda función, pero no fuera de la misma.
    Variables declaradas con 'var'*/ 
// Block Scope (Illinois)
    /* Bloque de código como un if, while, for, etc., es decir, que está entre llaves.
    Variables declardas con 'let' o 'const' */

// ACCESO
// GLOBAL -> LOCAL NO
// LOCAL -> GLOBAL SÍ

// PARA EVITAR QUE LAS FUNCIONES SE VUELVAN IMPREDECIBLES SE DEBE DECLARAR DENTRO DEL SCOPE MÁS REDUCIDO.

// EJEMPLO 2

let myName = 'Víctor';

function name(){
    let mySurname = 'Cosme';
    console.log(myName + ' ' + mySurname);
}

name();
// Víctor Cosme

// myName 
// Víctor

// mySurname
// uncaughted: mySurname is not defined (local scope) cuando utilizo la palabra reservada 'var'






// diferencia entre método y función
// método -> le pertenece a un objeto
// scope en un arrow function VS scope function



