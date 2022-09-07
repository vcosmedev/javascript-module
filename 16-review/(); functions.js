// Parte de código que realiza una tarea específica
// Ayudan a reutilizar partes del código
// Raalizan tareas específicas

// function -> ¿Qué quiero lograr?
// paratmeter -> ¿Qué necesito?
// argument -> ¿Cómo lo quiero?
// return -> Resultado

// Declaración
function functionName(parameter) {
    // code
}
// Ejecución
functionName(arguments);

function printName(name){
    console.log('Mi nombre es ' +  name + '.');
}

printName('Víctor');


function cakeMaker(flavour, shape) {
    return `El sabor de este pastel es ${flavour} y su forma es ${shape}.`;
}
// console.log(cakeMaker('chocolate', 'redonda'));

let orderOne = cakeMaker('chocolate', 'redonda');
let orderTwo = cakeMaker('vainilla', 'rectangular');
let orderThree = cakeMaker('caramelo', 'cuadrada');
// Al asignar el retorno de una función a una variable, podemos reutilzar este retorno más adelante

console.log(orderOne);
console.log(orderTwo);
console.log(orderThree);

