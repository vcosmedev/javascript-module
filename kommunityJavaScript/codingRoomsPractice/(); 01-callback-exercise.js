/*Crear función map()

Crear una función map que acepte un array y un callback y que:

por cada elemento del array ejecute el callback pasándole dicho elemento como argumento

obtenga el resultado

lo agregue a un nuevo array

devuelva el array final con el resultado de cada una de las llamadas al callback. */



function map (array, callback) {
    let newArray = [];
    for (let i=0; i<array.length; i++){ // const -> cada vez que la ejecuta el 'for' la vuelve a crear (tener en cuenta el scope: cuando termina u bloque, el espacio en memoria en la variable en este ciclo se elimina)
        const currentElement = array[i];
        const newElement = callback(currentElement);
        newArray.push(newElement);
    }
    return newArray;
}

const numbersArray = [2,4,6,8, 10];

const numberDuplicated = (number) => {
    return number * 2;
}

const numbersDuplicated = map(numbersArray, numberDuplicated);
const numbersDuplicatedArrowFunction = map(numbersArray, (number) => number * 2); // return implícito y arrow functon

console.log(numbersDuplicated);
console.log(numbersDuplicatedArrowFunction);







