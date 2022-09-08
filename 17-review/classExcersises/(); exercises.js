// CLASES EXERCISES

// 8.- Generar una función que me retorne un string que diga 'hola koders' y después imprimir 
// ese valor en la consola con ayuda de console.log() 

let greetings = () => 'Hola Koders';
let greeting = greetings('Hola Koders');
console.log(greeting);

// 9.- Generar una función que retorne el resultado de una operación matemática, el nombre de la operación y 
// los valores con los que se ejecutará la operación serán los parámetros de dicha función, por ejemplo:

let resultadoSuma = operacionMatematica('suma', 10,10);
let resultadoResta = operacionMatematica('resta', 10,10);
let resultadoMultiplicacion = operacionMatematica('multiplicación', 10,10);

let addition = (num1, num2) => {
    const add = 'Suma, ';
    let result = add + (num1 + num2);
    return result; 

}

let resultAdd = addition(10,10);
console.log(resultAdd);


let subs = (num1, num2) => {
    const sub = 'Resta, ';
    let result = sub + (num1 - num2);
    return result;
}

let resultSub = subs(10, 10);
console.log(resultSub);

let mult = (num1, num2) => {
    const mult = 'Multiplicación, ';
    let result = mult + (num1 * num2);
    return result;
}

let resultMult = mult(10, 10);
console.log(resultMult);


// 10.- Generar una función que retorne un objeto literal con las siguientes propiedades: (nombre, edad, genero, dirección). 
// La propiedad nombre debe ser un objeto que tenga las siguientes propiedades: (nombre, apellidoPaterno y apellidoMaterno).

let object = () => {
    return {
    name: {
        name: 'Víctor',
        surname: 'Cosme',
        surname: 'Masa'
    },   
    age: 30,
    gender: 'Masculino',
    address: 'Averroes'
    } 
}

let literalObj = object();
console.log(literalObj);

/*-----------------------------------*/

const generateLiteralObject = () => {
    let person = {
        name: {
            name: 'Víctor',
            surname: 'Cosme',
            surname: 'Masa'
        },   
        age: 30,
        gender: 'Masculino',
        address: 'Averroes'
        };
        return person;
}

let resultLiteralObj = generateLiteralObject();
console.log(resultLiteralObj);


// 11.- Generar una función que me retorne un arreglo que contenga los nombres de los koders de la generación 21.






// 12.- Generar una función que imprima el nombre de un koder en particular si es que existe en la lista si no existe imprimir 
// el mensaje 'Ese alumno no pertenece a esta generación'.







