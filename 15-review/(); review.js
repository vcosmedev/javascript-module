
let name;           // Declaración de una variable
name = 'Víctor';   // Inicialización de una variable

const PI = 3.14;   // Declaración de una constante -> 'Obligatorio' al momento de declarar asignar un valor ya que este no cambia


let number = 10;  // Declarar e inicializar la variable al mismo tiempo
let man = true;
let user = undefined
// Undefined variable:  a variable that has not been assigned a value is of type undefined
console.log(user); // expected output: undefined
let auto = null;
// Null variable: null is a special value that represents an empty or unknown value

// TYPEOF
// Operador typeof -> operador unario que permite obtener el tipo de dato que almacena una variable

console.log(typeof name);

// typeof puede ser almacenado en una variable y se puede mandar llamar a dicha variable

let typeOfData = typeof name;
console.log(typeOfData);


// OBJECTS
// colección de propiedades y valores
// puede tener valores primitivos, otros objetos, también un arreglo

let fruit = {
    color: 'rojo',
    flavour: 'ácida',
    price: '0.75 cent',
    // propiedad cuyo valor es un objeto que contiene una manzana verde
    sister: {
        color: 'verde',
        flavour: 'dulce',
        price: '1.10 cent',
            sister: {
                color: 'amarilla',
                flavour: 'dulce',
                price: '0.80 cent',
                    sister: {
                        color: 'naranja',
                        flavour: 'agridulce',
                        price: '0.99 cent',
                    },
            },
    },
    months: ['July', 'August', 'September'] // ARRAY -> meses, es fruta de temporada
};

// Acceder a las propiedades de un objeto
console.log(fruit.sister.sister.sister.price); // De forma estática -> No recomendable, mejor acceder de forma dinámica
// output-> sister is not defined???

let recolectionMonth = fruit.months;
console.log(recolectionMonth[0]); // July
console.log(recolectionMonth[1]); // August
console.log(recolectionMonth[2]); // September


// OPERADORES - TIPOS
// Asignación (=)
// Aritméticos (+ - * /)
    // (+) -> sumar y/o concatenar valores
        // sumar -> suma dos valores numéricos
        let result = 10 +10;
        console.log(result);
        // concatenar -> unir dos strings en una cadena de texto
        let concatenation = 'Víctor' + ' ' + 'Cosme';
        console.log(concatenation);
        // suma de un número + string
        let test = '5' + 5;
        console.log(test); 
        // Cambiar un tipo de dato a otro -> TYPE COERCION
            // Cuando el cambio de un tipo de dato a otro lo hace JS por defecto -> IMPLICIT TYPE COERCION // TIPO DE COERCIÓN IMPLÍCITA -> Conversióin implícita
            // Cuando se indica realizar el cambio de un tipo de dato a otro a JS -> EXPLICIT TYPE COERCION // TIPO DE COERCIÓN EXPLÍCITA -> Conversión explícita

    // (-) -> substraction
    let substraction = 2022 - 1991;
    console.log(substraction);

    // type coercion
        let substractionOne = 5 - 5;
        let substractonTwo = 5 - '5';
        let substractionThree = '5' - '5';

        console.log(substractionOne, substractonTwo, substractionThree);

