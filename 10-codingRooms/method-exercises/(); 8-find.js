/*El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.*/

const array1 = [1, 5, 8, 11, 19, 24];

const found = array1.find(element => element > 10);

console.log(found);

// Encuentra un objeto en un array por una de sus propiedades
// Encuentra objeto que contenga propiedad 'cerezas'

const inventory1 = [
    {name: 'manzanas', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cerezas', quantity: 5}
];

function cherry(fruit) {
    return fruit.name === 'cerezas';
}

console.log(inventory1.find(cherry));
// { nombre: 'cerezas', cantidad: 5 }

// Mismo ejemplo anterior, utilizando arrow-functions

const inventory2 = [
    {name: 'manzanas', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cerezas', quantity: 5}
];

const result = inventory2.find(fruit => fruit.name === 'cerezas');

console.log(result);
