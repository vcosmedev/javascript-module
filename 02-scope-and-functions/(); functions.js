// Declarative (textOne, textTwo -> son PARÁMETROS cuando declaramos)

function myFunction(textOne, textTwo) {
    console.log(textOne + '' + textOne); // concatenate
    console.log(`${textOne}` `${textTwo}`)  // dynamic way to generate strings -> Template Strings
}

let myName = 'Víctor';
let mySurname = 'Cosme';
myFunction(myName, mySurname); // Ejecución de la función (name y surname -> ARGUMENTOS)


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





