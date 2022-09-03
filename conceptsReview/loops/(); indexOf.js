/*

indexOf

¿Qué es un Array?
Estructura de datos en la que podemos almacenar diversos slots/huecos/variables/datos/otras estructuras de datos. Es una 'cajonera' 
en la que en cada hueco de dicha cajonera podemos guardar un núnmero, un texto, un objeto, una variable, otro array, aunque
teniendo todo de forma encapsulada de forma que podamos trabajar con ello.

const array = [];
array [0] = "1";
array [0] = "2";

--

const array = new Array(10);

const obj = {
    anArray: new Array(100);
};

for(let i=0; i<obj.anArray.length; i++) {
    obj.anArray[i] = 'Hola';
}

---

indexOf: indica el índice por el que se comienza la búsqueda. Por defecto es 0 pero hay que tener en cuenta varias consideraciones. 
La primera que si el índice es igual o mayor a la longitud del array, devolverá -1, ya que no hay nada que recorrer y 
por tanto en dónde buscar

*/