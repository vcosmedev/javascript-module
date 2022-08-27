/*
Generar una función que me ayude a indentificar si una palabra es un palíndrom:

palindromes('tacos') // expected output: false

*/

function palindromes (word) {
    // longitud de la palabra 
    const length = word.length;
    // recorrer hasta la mitad de la palabra
    for (let i=0; i< length / 2; i++) {
        // comprobar si la primera parte del string y la última string coinciden
        if (word[i] !== word[length - 1 - i]) {
            return false;
        }
    } 
    return true;
}

console.log(palindromes('kayak')); // expected output: true
console.log(palindromes('evil')); // expected output: false
console.log(palindromes('mum')); // expected output: true
console.log(palindromes('anna')); // expected output: true

// Evil olive
// .toLowerCase().replace(re, '');


// try another way to do it as follows:

// convert array 
// method
// reverse
// compare