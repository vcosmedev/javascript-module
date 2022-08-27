// Declarative (textOne, textTwo -> son PARÁMETROS cuando declaramos)

function myFunction(textOne, textTwo) {
    console.log(textOne + '' + textOne); // concatenate
    console.log(`${textOne}` `${textTwo}`)  // dynamic way to generate strings -> Template Strings
}

let myName = 'Víctor';
let mySurname = 'Cosme';
myFunction(myName, mySurname); // Ejecución de la función (name y surname -> ARGUMENTOS)


// EJEMPLO 2

/*
function saludar(nombre) { // Declaramos; 'nombre' es un PARÁMETRO
    console.log(Hola ${nombre});
    }
    
    let saludar = 'Víctor';
    saludar(nombre); // Ejecución de la función; 'nombre' es un ARGUMENTO

*/

// EJEMPLO 3 DECLARATIVE

// function sayHiToKoders(koder) {
//     console.log(koder);
// }

// sayHiToKoders('Víctor');

function sayHiToKoders(koder) {
    console.log(`Hi, ${koder}` + '!'); // -> Template string -> Set variables into a string
}

sayHiToKoders('Víctor');


// EJEMPLO 4 DECLARATIVE - RETURN

/* function addition(a,b) {
    let result = a + b;
    return result;
}

addition(2,1); */


function addition(a,b) {
    return a + b;
}

addition(2,1);


// Expression

let myVariableIsAFunction = function() {

}
    // Ejectuar función
    function multiplicate(numberOne, numberTwo) {
        let result = numberOne * numberTwo;
        console.log (`${result}`)
}
    // Llamar función
    multiplicate(10, 5);



// return
//numberOne + numberTwo -> Expression
















// arrow function //





