// 1- Crear una función que reciba un arreglo y lo regrese en orden invertido.

function myReverseArray(myArray = ['First Array', 'Second Array', 'Third Array']) {
    newArray = myArray.reverse();
    console.log(newArray);
    return;
}

myReverseArray();

// Using 'for' method

let myArrayWithFor = ['First Array', 'Second Array', 'Third Array'];

function myReverseArrayWithFor(myArrayWithFor){
    let newArrayWithFor = [];
    for (let i=0; i < myArrayWithFor.length; i++) {
        newArrayWithFor[i] = myArrayWithFor[myArrayWithFor.length-i-1];
    }
    return newArrayWithFor;
}

myArrayWithFor = myReverseArrayWithFor(myArrayWithFor);
console.log(myArrayWithFor);


/* 2- Crear una función que reciba un arreglo de números y devuelve el valor 
más grande que se encuentra en el arreglo */

function myFunction(myNumbersArray = [91, 55, 11, 13, 77, 89, 26, 47, 81, 90]) {

}



/* 3- Crear una función que pueda contar cuántos elementos de un arreglo son mayores a 
X valor dado en los parámetros */




/* 4- Crear una función que reciba un arreglo de números y regrese la lista de números 
pares que se encuentran en el arreglo */




/* 5- Crear una función que pueda contar cuántas veces aparece un elemento dado en los 
parámetros  en un arreglo también dado sus parámetros */



/* 6- Crear una función que recibe un arreglo de strings y un string, la función
devuelve 'true' si ese string se encuentra en el arreglo, de lo contrario 
devuelve 'false' */




/* 7- Crear una función que parta un arreglo por la mitad y retorne la segunda mitad del arreglo */

/* 8- Crear una función que recibe 3 arreglos, los concatena y regresa un arreglo */

/* 9- Crear una función que pueda generar 'n' elementos de la Serie de Fibonacci 
donde 'n' está dado por el argumento de la función */

/* 10- Crear una función que recibe un string y regresa 'false' si el string contiene 
al menos una letra mayúscula */

/* 11- Crear una función que recibe un string y retorna 'true' si la palabra dada
es un palíndromo y 'false' si no lo es */

/* 12- Crear una función que recibe un string con varias palabras y cambia a mayúscula
la primera letra de cada palabra */

/* 13- Crear una función que recibe un string con múltiples palabras y regresa
únicamente la palabra más larga de la oración */

/* 14- Crear una función que recibe 2 argumentos, una cadena de texto y un caracter, la
función regresa un número que representa el número de veces que se repite el caracter
en la cadena dada */