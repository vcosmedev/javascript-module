/*

Crear función filter()

Crear una función filter que acepte un array y un callback y que:

por cada elemento del array ejecute el callback pasándole dicho elemento como argumento

SI dicho callback devuelve true, agregar el elemento a un nuevo array

devuelva el array final con los elementos que pasaron el "filtro"

*/

// Casos a resolver:


// 1) [12,45,67,24, 12] -> [12, 24, 12] Devolver en un nuevo array números pares.

const numbers = [10, 2, 3, 40, 33, 50];

function filter (array, callback) {
    let newArray = [];
    for (let i=0; i<array.length; i++){ // const -> cada vez que la ejecuta el 'for' la vuelve a crear (tener en cuenta el scope: cuando termina u bloque, el espacio en memoria en la variable en este ciclo se elimina)
        const currentElement = array[i];
        const itsValid = callback(currentElement);
        if(itsValid){
            newArray.push(currentElement);
        }
    }
    return newArray;
};

const cb1 = number => {
    if (number %2 === 0){
        return true;
    }
    return false;
};

const evenNumbers = filter(numbers, cb1);
console.log(evenNumbers);


// Utilizando filter 
// // const numbers = [10, 2, 3, 40, 33, 50];
// const result = numbers.filter(numbers => numbers %2 === 0);
// console.log(result);


// 2) ['Cin', 'Jonatan', 'Fanny', 'Manu'] -> ['Cin'] Devolver en un nuevo array los que inician con 'c'.

const koders2 = ['Cin', 'Jonatan', 'Fanny', 'Manu'];

function filter (array, callback){
    let newArray = []; // Almacenar nuevo array
    for(i=0; i<array.length ; i++){ // Recorre array actual
        const currentElement = array[i]; // Variable que almacena el array actual
        const itsValid = callback(currentElement); // Variable que contiene una cb la cual verifica si el array actual cumple la condición
        if(itsValid){ // Condición 
            newArray.push(currentElement); // Método que agregar el elemento del array si la condición se ha cumplido
        }
    }
    return newArray; // Devolución del nuevo array con / sin los elementos, dependiendo de si estos han cumplido (con) o no (sin) con la condición
}

// The startsWith() method determines whether a string begins with the characters of a specified string, 
// returning true or false as appropriate.

const cb2 = koder => {  
    if(koder.startsWith('C') === true){
        return true;
    }
    return false;
}

const kodersNameInitialC = filter(koders2, cb2);
console.log(kodersNameInitialC);


// 3) ['Cin', 'Jonatan', 'Fanny', 'Manu'] -> ['Jonatan', 'Fanny', 'Manu'] Devolver en un nuevo array los que contienen A.

const koders3 = ['Cin', 'Jonatan', 'Fanny', 'Manu'];

function filter (array, callback){
    let newArray = []; // Almacenar nuevo array
    for(i=0; i<array.length ; i++){ // Recorre array actual
        const currentElement = array[i]; // Variable que almacena el array actual
        const itsValid = callback(currentElement); // Variable que contiene una cb la cual verifica si el array actual cumple la condición
        if(itsValid){ // Condición
            newArray.push(currentElement); // Método que agregar el elemento del array si la condición se ha cumplido
        }
    }
    return newArray; // Devolución del nuevo array con / sin los elementos, dependiendo de si estos han cumplido (con) o no (sin) con la condición
}

const cb3 = koder => {  
    if(koder.includes('a') === true){  
        return true;
    }
    return false;
}

const kodersNameIncludeA = filter(koders3, cb3);
console.log(kodersNameIncludeA);

