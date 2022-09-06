
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
// expected output-> 0.99 cent

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
    
    // (*) -> multiplication
    // (/) -> division
    // (**) -> exponentiation

    let multiplication = 10 * 2;
    let division = 10 / 2;
    let exponentiation = 5 ** 2;

    console.log(multiplication, division, exponentiation);

    // Operadores lógicos
        // &&  ||  >=  <=  ==  ===

    
    // Estructuras de control
    // if

    let human = true;
    if(human === true) {
        console.log('Víctor es humano.');    
    }
    
    let userOneAge = 22;
    if(userOneAge >= 18) {
        console.log('El usuario es mayor de edad.');
    }
    
    // if ... else
    let userTwoAge = 22;
    if(userTwoAge >= 18) {
        console.log('El usuario es mayor de edad.');
    }else {
        console.log('El usuario es menor de edad.')
    }
    
    // if .. else if .. else
    let time = 13;
    if (time < 10) {
        greeting = "Good morning";
    } else if (time < 20) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }

    console.log(greeting); // expected output 'Good day'

    // switch
    let userThreeAge = 18;
    switch(userThreeAge) {
        case 18:
        console.log('El usuario es mayor de edad.');
        break;
        case 25:
        console.log('El usuario es un adulto joven.');
        break;
        default: // userThreeAge < 18:
        console.log('El usuario es menor de edad.');
    }

    // LOOPS - CICLOS
    // while
    let userFourAge = 35;

    while(userFourAge > 25 && userFourAge < 40) {
        console.log('El usuario es un adulto joven.');
        userFourAge ++; // userFourAge +=1;
    }

    // for
    for(let userFiveAge = 25; userFiveAge <= 40; userFiveAge++) {
        console.log('El usuario es un adulto joven.')
    }

    // for ... of -> Depende de un ARREGLO -> Recorrer todos los valores de un ARREGLO
    // for ... in -> Depende de un OBJETO -> Recorrer todos los valores de un OBJETO 
    // forEach -> Recorre ARRAYs. Si se quiere recorrer un OBJETO, hay que transformar el ARRAY en un OBJETO







    