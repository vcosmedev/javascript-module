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

//Concepto de referencia