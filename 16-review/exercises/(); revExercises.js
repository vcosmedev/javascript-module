// 1- Generar una variable con el nombre que se desea por cada tipo de dato que se han visto.

    let string = 'Víctor Cosme'
    let number = 30;
    let boolean = true;
    let foo = null;
    let location; // undefined
    let array = [2017, 2018, 2019, 2020, 2021, 2022];
    let hobbies = {
        sport: 'atletism',
        music: ['pop', 'indie', 'jazz'],
        interest: 'programming',
        travel: {
            spring: 'beach',
            summer: 'city',
            autumn: 'countryside' ,
            winter: 'home'
        }
    }

    // foo -> Term used by programmers as a placeholder for a value that can change, depending on conditions or on information passed to the program.


// 2- Generar una variable de tipo objeto que represente un coche (¿Qué propiedades tiene un coche?).

    let car = {
        brand: 'BMW',
        model: 'X4',
        year: 2022,
        price: 800.000,
        specifications: {
            speed: '215 km/h',
            tank: '65l',
            capacity: 1.998,
            compression: 11.0,
            emission: '175 g/km',

        } 
    }

// 3- Generar una variable de tipo arreglo con el nombre que se desea y que contenga 10 elementos.

    let hikingBackpack = ['water', 'food', 'sun cream', 'sun glasses', 'compass', 'first-aid kit', 'knife', 'multitool', 'rain wear', 'extra clothes'];


// 4- Generar un script/programa que imprima 10 veces el nombre de tu mascota.

    function myCat(name) {
        for(let i=0; i<10; i++) {
            console.log('Rogelia');
        }
    }
    myCat();


// 5- Generar un programa que imprima el nombre de una persona siempre y cuando la persona sea mayor de edad. 
// Si la persona no es mayor de edad, imprimir el mensaje 'No se tiene permitido utilizar sus datos persoales'.


let userAge = 26;
let userName = 'Julen';
function age() {
    if(userAge >= 18) {
        console.log(`¡Hola, ${userName}!`);
    }else {
        console.log('No se tiene permitido utilizar sus datos personales.')
    }
}

age();



/* 6- Generar programa que ayude a imprimir en consola el valor de cada una de las propiedades del siguiente objeto:

let user = {
    name: 'Juan',
    age: 20,
    password: 'Password2022'
}

*/

let user = {
    name: 'Juan',
    age: 20,
    password: 'Password2022'
}

for (let prop in user) {
    console.log(prop, user[prop]);
}


/* 7- Generar un programa que me aude a imprimir el contenido de un arreglo, elemento por elemento
let fruits = ['strawberry', 'watermelon', 'apple', 'pineapple']
*/

let fruits = ['strawberry', 'watermelon', 'apple', 'pineapple'];

for(let prop of fruits) {
    console.log(prop);
}