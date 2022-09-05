/*

Switch: instrucción de fulo de control que prueba el valor de una expresión vs varios casos.

MDN DEFINITION: the switch statement evaluates an expression, matching the expression's value against a series of case clauses, and 
executes statements after the first case clause with a matching value, until a break statement is encountered. The default clause 
of a switch statement will be jumped to if no case matches the expression's value.

switch (expresión) { 
    case valor1: 
       Sentencias a ejecutar si la expresión tiene como valor a valor1 
       break 
    case valor2: 
       Sentencias a ejecutar si la expresión tiene como valor a valor2 
       break 
    case valor3: 
       Sentencias a ejecutar si la expresión tiene como valor a valor3 
       break 
    default: 
       Sentencias a ejecutar si el valor no es ninguno de los anteriores 
}

*/

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Oranges are $1.15 a pound.');
    break;  
  case 'Mangos':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}