// Loops: bloques de código que nos permiten realizar acciones repetitivas de forma automatizada.

// Tipos de Loops

/* while

The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. 
The condition is evaluated before executing the statement.

let n = 0;

while (expression) { // expression -> parte de una declaración
    n++;
}

console.log(n);

*/


// EXAMPLE 1

// let n = 0;

// while (n>3) {
//     n++;
// }

// // console.log(n);
// // expected output: 3



// EXAMPLE 2

// let n = 0;
// let x = 0;

// while (n < 3) {
//   n++;
//   x += n;
// }

// expected output: 3

// let n = 3;

// while (n === 3) {
//     console.log(n, 'Paso por el loop')
//     n++;
// }

// EXAMPLE 3

let fruits = ['Mamey', 'Mango', 'Manzana', 'Mandarina'];
let index = 0;

function printFruits(fruits) {
    while (fruits[index] !== undefined) {
        console.log(fruits[index]);
        index++;
    }
}

printFruits(fruits);
console.log(forFruits);


/* expected output: 

Mamey
Mango
Manzana
Mandarina

*/
 

/* for 
   Bucle for se repite hasta que una condición específica se evalúa como falsa.
   The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and 
   separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.

   let str = '';

    for (let i = 0; i < 9; i++) {
    str = str + i;
    }

    console.log(str);
    // expected output: "012345678"

*/


    let forFruits = ['Mamey', 'Mango', 'Manzana', 'Mandarina'];
    let i = 0;

    function printForFruits(forFruits) {
        for (let i = 0; i <= forFruits.length - 1; i++) {
            console.log(forFruits[i]);
        }
        // i = 4; false;
    }

    printForFruits(forFruits);
    console.log(forFruits);

    /* expected output: 

Mamey
Mango
Manzana
Mandarina

*/


/* for in <funciona a través de las llaves>
Objetos: tienen llaves (brand) y valores (BMW)
Itera a través de todas las propiedades enumerables de un objeto.
The for...in statement iterates over all enumerable properties of an object 
that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.
*/

let car = {
    brand: 'BMW',
    doors: 3,
    color: 'black'
}

for(const key in car) {
    console.log(car[key]);
}

// Obtenemos 'key': cada una de las propiedades del objeto
// Pero... ¿cómo obtenemos los valores? car[key]

/* for of <funciona a través de los valores>
Itera a través de todas las propiedades enumerables de un objeto.

*/

let favoritesBrandsCar = ['BMW', 'Mercedes', 'Lamborgini', 'Ferrari']; // length: 4

for(const brand of favoritesBrandsCar) {
    console.log(brand);
}
