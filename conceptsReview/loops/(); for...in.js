// for ... in
// Aparición ECMAScript 6
// Itera a través de todas las propiedades enumerables de un OBJETO

const book = {
    title: 'Where The Crawdads Sing',
    author: 'Delia Owens',
    genre: 'Literary fiction',
    publisher: 'G. P. Putnams Sons',
    publicationDate: 'August 14, 2018',
    pages: 368,
    price: '$12 USD',
}

/* for (key in object) // Para cada clave en un objeto se requiere que se haga algo determinado */

for (let prop in book) {
    console.log(`The prop ${prop} contains ${book[prop]}`);
}
