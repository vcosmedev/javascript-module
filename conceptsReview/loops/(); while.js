/* LOOPS / BUCLES ¿QUÉ SON?

En ocasiones nos interesa que ciertas partes de nuestro código se ejecuten varias veces depeniendo de una condición. Es en estos casos
en los que entran en juego los bucles para ayudarnos. Dependiendo del caso de uso, necesitaremos un tipo u otro.

Existen tres elementos que controlan el flujo de ejecución del bucle:
1- Inicialización: es la que fija los valores con los que ejecutamos el bucle
2- Condición permanencia 
3 - Actualización de la variable que controla esa ejecución */

// while: mientras se cumpla una condición se ejecutará el código que establezcamos entre llaves

while(true) { 
    code 
}

while (i < 11) {
    console.log(i);
    i++;
}


let i= 0;

function loopWhile (num) {

    while (i < num) {
        console.log(i);
        i++;
    }
}

loopWhile(11);