/* LOOPS / BUCLES ¿QUÉ SON?

En ocasiones nos interesa que ciertas partes de nuestro código se ejecuten varias veces depeniendo de una condición. Es en estos casos
en los que entran en juego los bucles para ayudarnos. Dependiendo del caso de uso, necesitaremos un tipo u otro.

Existen tres elementos que controlan el flujo de ejecución del bucle:
1- Inicialización: es la que fija los valores con los que ejecutamos el bucle
2- Condición permanencia 
3 - Actualización de la variable que controla esa ejecución */

// for -> sentencia de tipo bucle más utilizada
// permite resumir en una sola línea lo que se haría con un ciclo 'while'

// sintaxis

for(initialization; condition; update) {
    // code here
}

// Example

function loopFor(num) {
    for(let i=0; i<num; i++) {
        console.log(i);
    }
}

loopFor(11);

// ESte tipo de bucle es muy utilizado, sobre todo para recorrer arrays