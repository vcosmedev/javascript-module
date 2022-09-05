// for ... in
// Apareción ECMAScript 6

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
    console.log(`The prop ${prop} conatains ${book[prop]}`)
}