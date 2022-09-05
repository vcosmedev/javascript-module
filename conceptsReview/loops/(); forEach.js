// forEach -> Loop de la case Array | Ejecuta la función indicada una vez por cada elemento de su array
// Permite iterar dentro de un array de fomra secuencial
// Se introdujo en la versión 5 de ECMA Script

const myArray = [1, 2, 3, 4, 5];

myArray.forEach(function(item, index) {
    console.log('El valor de la posición ' +index+ 'es: ' +item);
})

// Podemos mostrar el código de una forma más 'elegante' a través de una  arrow function + string dinámico, ECMAScript 6

const myArray2 = [1, 2, 3, 4, 5];

myArray2.forEach((item, index) => {
    console.log(`El valor de la posición ${index} es: ${item}`);
})


// forEach 
// ¿Cómo iteramos un objeto? No se puede ya que forEach es de clase array. 
// En estos casos se necesita que las propiedades de un objeto sean un array.
// Para conseguir convertir objeto en array, se utiliza propiedad de un objeto llamada 'getOwnPropertyNames'
// 'getOwnPropertyNames' -> devuelve un array con todas las propiedades del objeto
// 'getOwnPropertyDescriptor' -> devuelve el valor de las propiedades


const book = {
    title: 'Where The Crawdads Sing',
    author: 'Delia Owens',
    genre: 'Literary fiction',
    publisher: 'G. P. Putnams Sons',
    publicationDate: 'August 14, 2018',
    pages: 368,
    price: '$12 USD',
}

const props = Object.getOwnPropertyNames(book);
props.forEach(name => {
   let value = Object.getOwnPropertyDescriptor(book, name).value 
    console.log(`The prop ${name} contains: ${value}.`);
})