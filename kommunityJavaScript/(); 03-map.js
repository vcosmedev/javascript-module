/* Crear una función map que acepte un array y un callback y que:

1- por cada elemento del array ejecute el callback pasándole dicho elemento como argumento

2- obtenga el resultado

3- lo agregue a un nuevo array

4- devuelva el array final con el resultado de cada una de las llamadas al callback 

*/

function map(myArray, callback) {
    let newArray = [];
    for (let i=0; i<myArray.length; i++){
        const currentElement = myArray[i];
        const newElement = callback(currentElement);
        newArray.push(newElement);
    }
    return newArray;
}

// let / const -> scope de bloque
// {} -> todo lo que esté entre llaves, es un bloque


// [2,5,8,8] -> [4,10,16,16]
const numbersArray = [2,5,8,8];

const numberDuplicated = (number) => {
    return number * 2;
}

const numbersDuplicated = map(numbersArray, numberDuplicated);
const numbersDuplicated2 = map(numbersArray, (number) => number * 2); // return implícito y arrow functon

console.log(numbersDuplicated);
console.log(numbersDuplicated2);



// [2,5,8,8] -> [1,4,7,7]

function map(myArray, callback) {
    let newArray = [];
    for (let i=0; i<myArray.length; i++){
        const currentElement = myArray[i];
        const newElement = callback(currentElement);
        newArray.push(newElement);
    }
    return newArray;
}

const numbersArrayTwo = [2,5,8,8];
const numberSubstraction = number => {
    return number - 1;
}

const numbersSubstraction = map(numbersArrayTwo, numberSubstraction);
console.log(numbersSubstraction);


// ['Jona', 'Manu', 'Annie', 'Cin'] -> ['J', 'M', 'A', 'C']

function map(myArray, callback) {
    let newArray = [];
    for (let i=0; i<myArray.length; i++){
        const currentElement = myArray[i];
        const newElement = callback(currentElement);
        newArray.push(newElement);
    }
    return newArray;
}

const namesArray = ['Jona', 'Manu', 'Annie', 'Cin'];
const getFirstLetter = name => name[0];

/*charAt example aqui*/

const getFirstLetters = map(namesArray, getFirstLetter);
console.log(getFirstLetters);


// ['Manu Cabrera Rojas', 'Cin Ruiz Verdugo', 'Fanny Pérez Leyva'] -> ['M. C. R.', 'C. R. V.', 'F. P. L.']
// length -> 'len, go to hell'

function map(myArray, callback) {
    let newArray = [];
    for (let i=0; i<myArray.length; i++){
        const currentElement = myArray[i];
        const newElement = callback(currentElement);
        newArray.push(newElement);
    }
    return newArray;
}

const namesSurnamesArray = ['Manu Cabrera Rojas', 'Cin Ruiz Verdugo', 'Fanny Pérez Leyva'];
const getFirstNameSurnameLetter = name => name[0];

const getFirstNameSurnameLetters = map(namesSurnamesArray, getFirstNameSurnameLetter);
console.log(getFirstNameSurnameLetters);





