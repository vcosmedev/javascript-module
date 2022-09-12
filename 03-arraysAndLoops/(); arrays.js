let fruits = []; // Inicializar el array con un array vacío (Array: colección lineal de elementos, uno seguido de otro, es decir, indexados)
let index = 0;

function buyFruits(fruitName) {
    fruits[index] = fruitName;
    index++;
}

buyFruits('Mandarina');
buyFruits('Melocotón');
buyFruits('Melón');
buyFruits('Moras');
buyFruits('Murici');


console.log(fruits);



/*-------EJEMPLO MANUAL 1

let fruits = [];
let index = 0;

fruits[0] = 'fruitOne;
fruits[2] = 'fruitTwo;

console.log(fruits);

IMPRIME -> ['fruitOne', <empty item>, 'fruitTwo']

-------

EJEMPLO MANUAL 1.1

let fruits = [];
let index = 0;

fruits[0] = 'fruitOne;
fruits[1] = 'fruitTwo;
fruits[2] = 'fruitThree;

console.log(fruits);

IMPRIME -> ['fruitOne', 'fruiteTwo', 'fruitThree']

-------*/


/* ------- Coleccionar en un array valores de distino tipo e incluso otros arrays.

let fruits = [];
let index = 0;

fruits[0] = 'fruitOne';
fruits[1] = 'fruitTwo';
fruits[2] = 'fruitThree';
fruits[3] = 10;
fruits[4] = true;
fruits[5] = ['rottenFruitOne', 'rottenFruitTwo', 'rottenFruitThree'];

console.log(fruits);

IMPRIME -> 

[
    "fruitOne",
    "fruitTwo",
    "fruitThree",
    10,
    true,
    [
        "rottenFruitOne",
        "rottenFruitTwo"
    ]
]

-------*/

/* Ejemplo length 

let fruits = [];
let index = 0;

fruits[0] = 'fruitOne';
fruits[1] = 'fruitTwo';
fruits[2] = 'fruitThree';
fruits[3] = 10;
fruits[4] = true;
fruits[5] = ['rottenFruitOne', 'rottenFruitTwo', 'rottenFruitThree'];

console.log(fruits);

let name = 'Víctor';
console.log(name.length);
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);

IMPRIME:

4
6
['rottenFruitOne', 'rottenFruitTwo', 'rottenFruitThree'];

*/




/* 

const array = [1,2,3];           // Almacenar array en una constante
array[0] = 'String';


------

const vegetables = new Array();   // Funciones constructoras

console.log(vegetables)

Objeto
Atributos
Métodos // Son funcionalidades dentro de un objeto

Objeto: coche
Propiedades: puertas, llantas, color
Funcionalidades: frenos ABS, asistente de arranque, sistema de control eléctrico


*/

// reduce method 
const addition = [10, 20, 30, 40].reduce((a,b) =>a + b);
console.log(addition);