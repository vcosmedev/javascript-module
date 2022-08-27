// Ejercicio de clase: imprimir cada valor dentro de un arreglo con while (hasta que se llegue a la última posición).

let myArray = ['arryOne', 'arrayTwo', 'arrayThree'];
let index = 0;

while (index <=3 ){
    index++;
}

console.log(myArray[myArray.length - 1]); // expected output: 'arrayThree'


// Generar una función que imprima cada valor dentro de un arreglo con while

let mySecondArray = ['arryOne', 'arrayTwo', 'arrayThree', 'arrayFour'];
let n = 0;

function printSecondArrayElements(mySecondArray) {
    while (n<mySecondArray.length){
        console.log(mySecondArray[n]);
        n++;
    }
}

console.log(mySecondArray);



