// 1- Crear una función que reciba un arreglo y lo regrese en orden invertido.

function myReverseArray(myArray = ['First Array', 'Second Array', 'Third Array']) {
    newArray = myArray.reverse();
    console.log(newArray);
    return;
}

myReverseArray();

// Using 'for' method

let array1 = ['First Array', 'Second Array', 'Third Array'];

function reverseArray(array){
    let newArray = [];
    for (let i=0; i < array.length; i++) {
        newArray[i] = array[array.length-i-1]; // Colocamos el elemento del array en la posición que le corresponde para invertir el array.
    }
    return newArray;
}

array = reverseArray(array1);
console.log(array);


/* 2- Crear una función que reciba un arreglo de números y devuelve el valor 
más grande que se encuentra en el arreglo */

let array2 = [91, 55, 11, 13, 77, 89, 26, 47, 80, 90];

function biggestNumberFunction(array) {
    let biggestNumber = [];
    biggestNumber = array[0];
    for (let i=0; i < array.length; i++) {
        if (array[i] > biggestNumber) {
            biggestNumber = array[i];
        }
    }
    return biggestNumber;
}

console.log(biggestNumberFunction(array2));


/* 3- Crear una función que pueda contar cuántos elementos de un arreglo son mayores a 
cierto valor dado (X) en los parámetros */

let array3 = [91, 55, 11, 13, 77, 89, 26, 47, 80, 90];

function biggestNumbersFunction(array, number) {
    let biggestNumbers = [];
    for (let i=0; i < array.length; i++) {
        if (array[i] > number) {
            biggestNumbers++;
        }
    }
    return biggestNumbers;
}

console.log(biggestNumbersFunction(array3,50));


/* 4- Crear una función que reciba un arreglo de números y regrese la lista de números 
pares que se encuentran en el arreglo */

let array4 = [91, 55, 11, 13, 77, 89, 26, 47, 80, 90];

function findEvenNumbers(array) {
    let evenNumbers = [];
    let n = 0;
    for (let i=0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evenNumbers[n] = array[i];
            n++;
        }
    }
    return evenNumbers;
}
console.log(findEvenNumbers(array4));


/* 5- Crear una función que pueda contar cuántas veces aparece un elemento dado en los 
parámetros de un arreglo también dado sus parámetros */

let array5 = [91, 55, 11, 13, 77, 11, 26, 47, 11, 90];

function findRepeatedNumber(array, number) {
    let repeatedNumber = [];

    for (let i=0; i < array.length; i++) {
        if (array[i] === number) {
            repeatedNumber++;
        }
    }
    return repeatedNumber;
}
console.log(findRepeatedNumber(array5,11));


/* 6- Crear una función que recibe un arreglo de strings y un string, la función
devuelve 'true' si ese string se encuentra en el arreglo, de lo contrario 
devuelve 'false' */

let koders = ['Víctor', 'Fanny', 'Annie', 'Xavy'];

function anArray(array, string) {
    for (let i=0; i < array.length; i++) {
        if (array[i] === string) {
            return true;
        }
    }
    return false;
}

console.log(anArray(koders, 'Víctor'));


/* 7- Crear una función que parta un arreglo por la mitad y retorne la segunda mitad del arreglo */

let array = [1, 'Two', 'Three', 4, 5, 6, 'Seven', 8, 'Nine', 10];

function splitArray(array) {
    let newArray = [];
    for (let i = 0; i < array.length/2; i++) {
        newArray[i] = array[i];
    }
    return newArray;
}

console.log(splitArray(array)); // expected output: [6, 'Seven', 8, 'Nine, 10] *********


/* 8- Crear una función que recibe 3 arreglos, los concatena y regresa un arreglo */

let arrayNumberOne = [1, 2, 3];
let arrayNumberTwo = [4, 5, 6];
let arrayNumberThree = [7, 8, 9];

function newArrayFunction(arrayNumberOne, arrayNumberTwo, arrayNumberThree) {
    let newArray = [arrayNumberOne] + ',' + [arrayNumberTwo] + ',' + [arrayNumberThree];
    return newArray.split(',').map(Number);
}

console.log(newArrayFunction(arrayNumberOne, arrayNumberTwo, arrayNumberThree));


/* 9- Crear una función que pueda generar 'n' elementos de la Serie de Fibonacci 
donde 'n' está dado por el argumento de la función */

function fibonacciFunction(elements){
    let n = [0,1];
    for (let i = 2; i <= elements; i++){
        n.push(n[i-1]+n[i-2]);
    }
    return n;
}
console.log(fibonacciFunction(39));


/* 10- Crear una función que recibe un string y regresa 'false' si el string contiene 
al menos una letra mayúscula */

let word10 = 'Welcome';

function lowerCaseFunction(string){
    for (let i = 0; i <= string.length; i++){
        if (string[i] === string[i].toUpperCase()){
            return false;
        } else {
            return true;
        }
    }
}

console.log(lowerCaseFunction(word10));


/* 11- Crear una función que recibe un string y retorna 'true' si la palabra dada
es un palíndromo y 'false' si no lo es */

let word11 = 'NaN';

function palindromeFunction(string){
    let newString = [];
    for (let i = 0; i < string.length; i++ ){
        newString[i] = string[string.length-i-1];
    }

    if (newString.join('') === string){
        return true;
    } else {
        return false;
    }
}

console.log(palindromeFunction(word11));


/* 12- Crear una función que recibe un string con varias palabras y cambia a mayúscula
la primera letra de cada palabra */

let string12 = 'bienvenid@ koder de la generación veintiuno';

function firstLetterToUppercase(string){
    let newString = string.split(' ')
    let stringToCapitalLetter = [];
    for(let i = 0; i < newString.length; i++){
        stringToCapitalLetter[i] = newString[i].charAt(0).toUpperCase() + newString[i].slice(1);
    }

    return stringToCapitalLetter.join(' ');
}

console.log(firstLetterToUppercase(string12));


/* 13- Crear una función que recibe un string con múltiples palabras y regresa
únicamente la palabra más larga de la oración */

let string13 = 'Érase una vez un koder codeando en Kodemia';

function longestWord(string){
    let newString = string.split(' ')
    let longestWord = '';
    for(let i = 0; i < newString.length; i++){
        if(newString[i].length > longestWord.length){
            longestWord = newString[i];
        }
    }
    return longestWord;
}

console.log(longestWord(string13));


/* 14- Crear una función que recibe 2 argumentos, una cadena de texto y un caracter, la
función regresa un número que representa el número de veces que se repite el caracter
en la cadena dada */

let string14 = 'Érase una vez un koder codeando en Kodemia';

function repeatedCharactersFunction(string,character){
    let characters = 0;
    for (let i = 0; i < string.length; i++){
        if(string[i] == character){
            characters++;
        }
    }
    return characters;
}

console.log(repeatedCharactersFunction(string14,'e'));

