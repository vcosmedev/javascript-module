// Crear una función que reciba un nombre y dvuelva un saludo con el nombre
// Output -> 'Hola {nombre}, bienvenid@ a Kodemia'

// Declaración de la función
function greeting (name) {
    return `Hola ${name}, bienvenida a Kodemia`;
}
// Ejecución de la función
const greetingSomeone = greeting('Víctor');
console.log(greetingSomeone);

// Arrow-functions

// Funciones anónimas -> aquellas que no ntienen nombre; se pueden asignar funciones anónimas a una varible
// Declaración de la función y se asigna a una variable

const sum = function (num1, num2) {
    return num1 + num2;
}

console.log(sum); // output: imprime la DECLARACIÓN de la función que asignamos a una variable

/* Es lo mismo que la anterior función anónima anterior (funciones anónimas no son habituales)

function sum(num1, num2) {
    return num1 + num2:
}
*/

// Puedo utilizar 'sum' como una función y pasarle parámetros. Por ejemplo, sum(10,15)

// Una arrow-function no es más que una función anónima

/* Sintaxis de una arrow-function

(param1, param2, ..., paramN) => {
    cuerpo de la función
}
*/
// arrow-function example

const substraction = () => {
    return num1 - num2;
}

substraction(10, 5);

// Si la arrow-function recibe un único parámetro, podemos omitir los paréntesis

// Crear función que formatee un solo string
// APLICA SI LA ARROW-FUNCTION SOLO RECIBE UN SOLO PARÁMETRO


const formatted = word => {
    return word.toLowerCase();
}

// CUANDO RECIBA MÁS DE UN PARÁMETRO, ES NECESARIO COLOCAR PARÉNTESIS

const addition = (num1, num2, num3) => {
    // contenido functión aquí
}


// Return implícito

/* Solo aplica a las arrow-funcitons.
Si lo que está ejectuando mi función se puede reducir a una sola línea,
podemos omitir las llaves y el return */

const substraction2 = (num1, num2) => {
    return num1 - num2;
}

const substraction3 = (num1, num2) => num1 - num2; // num1 - num2 recoge el return implícito
// Solo aplicar solamente si tiene una línea nuestra función



