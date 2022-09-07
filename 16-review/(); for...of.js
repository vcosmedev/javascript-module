// for ... of
// Ciclo que itera sobre objetos iterables (Array, Map, Set, arguments object, etc) que ejecutan acciones con los valores obtenidos en cada iteración
// Recorre una serie datos 'indexados', es decir, tienen una posición concreta
// ¿Cómo podemos obtener un elemento de un array? A travéd del índice***

let fruits = ['strawberry', 'pineapple', 'watermelon'];
// fruits[0]; strawberry -> Obtiene un valor concreto de un array
// fruits[1]; pineapple
// fruits[2]; watermelon

for(let prop of fruits) {
    console.log(prop);
}
// expected output: los valores de los elementos
// strawberry
// pineapple
// watermelon

let fruitsTwo = ['strawberry', 'pineapple', 'watermelon'];

for(let prop of fruitsTwo) {
    console.log(fruitsTwo[prop]); // Un valor en concreto***
}

// for ... in -> muestra el índice de cada elemento, a diferencia de for ... of que muestra el valor
