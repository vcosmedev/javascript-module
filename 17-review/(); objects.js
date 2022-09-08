// Objects

let car = {
    brand: 'BMW',
    color: 'blue',
    year: '2022',
    doors: '4',
}

// Obtener el valor de una propiedad de las siguientes formas:
// car.brand
// car['brand']
console.log(car.brand);
console.log(car['year']);

if(car.owner !== undefined) {
    console.log('La propiedad sí existe.');
}else{
    console.log('La propiedad no existe.');
}

// Añadir propiedades y valores al objeto:

car.owner = 'Víctor';
// o
car['owner'] = 'Víctor';

// Al ejecutar de nuevo nuestro 'if', ahora va a devolver la 'La propiedad sí existe'

if(car.owner !== undefined) {
    console.log('La propiedad sí existe.');
}else{
    console.log('La propiedad no existe.');
}


/*
for(let prop in car) {
}
*/