// for ... in
// Aparición ECMAScript 6
// Itera a través de todas las propiedades enumerables de un OBJETO

// for (const i in book) 
// 'i' es la variable que representa el nombre de cada propiedad del objeto (title, autor, gnre, publisher...) -> sería las 'keys'.

const book = {
    title: 'Harry Potter y el misterio de JS.',
    author: 'Víctor',
    pages: 300
}

book.title
book['title']

for (let prop in book) {
    console.log(prop, book[prop]);
}




// EJERCICIO: GENERAR UN OBJETO QUE CONTENGA UN ARRAY
// EL OBJETO SE RECORRE CON UN 'FOR IN', EL ARRAY SE RECORRE CON UN 'FOR OF'. REALIZAR EJERCICIO CON EL EJEMPLO ANTERIOR.
// REALIZAR EL EJEMPLO CON UNA SERIE DE LIBROS Y DENTRO COMO ARRAY QUE CONTENGA LOS PERSONAJES.