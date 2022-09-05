/*

indexOf

¿Qué es un Array?
Estructura de datos en la que podemos almacenar diversos slots/huecos/variables/datos/otras estructuras de datos. Es una 'cajonera' 
en la que en cada hueco de dicha cajonera podemos guardar un núnmero, un texto, un objeto, una variable, otro array, aunque
teniendo todo de forma encapsulada de forma que podamos trabajar con ello.

const array = [];
array [0] = "1";
array [0] = "2";

*/

const array = new Array(10);

// Crear objeto que contiene un array de 10 posiciones

const obj = {
    anArray: new Array(10)
};

for(let i=0; i<obj.anArray.length; i++) {
    obj.anArray[i] = 'Hola';
}

console.log(obj);

    // Podemos optimizar el código anterior
    // La comprobación 'i<obj.anArray.length;' se va a hacer cada vez que se pase de un elemento a otro
    // La longitud no va a cambiar, por tanto no es necesario que sea llamada en cada ocasión
    // Para optimizar, asignamos la longitud a una variable
    // Para que se muestre 'más bonito' nuestro código, podemos incluir la variable que hemos definido dentro del ciclo 'for'

    const obj2 = {
        anArray: new Array(10)
    };
    // let length = obj2.anArray.length;
    for(let i=0, length = obj2.anArray.length ; i<length; i++) {
        obj2.anArray[i] = 'Hola';
    }

    console.log(obj2);


    // Optimización adicional: el acceso al array dentro del bucle
    // Definimos el array en una constante para evitar tener que entrar dentro del objeto
    // Cada vez que se entra en un objeto que a su vez tiene otras estructuras, cada paso, es un acceso a memoria
    // De esta forma, se optimiza en tiempos


    const obj3 = {
        anArray: new Array(10)
    };

    const anArray = obj3.anArray;

    for(let i=0, length = anArray.length; i<length; i++) {
        obj3.anArray[i] = 'Hola';
    }

    console.log(obj3);

// Ejemplo performance de código optimizado

const obj4 = {
    anArray: new Array(50)
}

function badPerformance() {
    console.time('bad');
    for(let i=0; i<obj4.anArray.length; i++) {
        obj4.anArray[i] = 'Hola'; // Aquí accedemos posición por posicion
    }
    console.timeEnd('bad');
}

function goodPerformance() {
    console.time('good');
    anArray = obj4.anArray;
    for(let i=0; length = anArray.length, i<length; i++) {
        anArray[i] = 'Hola'; // Aquí accedemos posición por posicion
    }
    console.timeEnd('good');
}

badPerformance(); // expected output -> bad: 0.0341796875 ms
goodPerformance(); // expected output -> good: 0.052734375 ms

// Se ha 'cacheado' el acceso y se ha 'cacheado' la cmprobación
