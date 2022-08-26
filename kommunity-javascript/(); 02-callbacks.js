// Callback
// La declaración/definición de una función que pasa como parámetro a otra función para ser ejectuado posteriomente
// Callback -> declaración de otra función
// A UN CALLBACK PODEMOS PASARLE PARÁMETROS YA QUE FUNCIONA COMO UNA FUNCIÓN


//EJEMPLO1
// Declarar función
function goingToSupermarket(callback) /*variable*/ {
    console.log('Yendo al supermercado');
    console.log('Llegué al supermercado');
    callback(); // Ejecutando función avisar avisar()
}

function notice () {
    console.log('Mamá, ya llegué al supermercado');
}

// Ejecutar función
goingToSupermarket(notice); // manda llamar

/* Expected output

Yendo al supermercado
Llegué al supermercado
Mamá ya llegué al supermercado

*/

// Ejecutar función de la fomra '(notice());'
goingToSupermarket(notice()); // ESTO ESTÁ MAL

/*Expected output

Ejecuta primero la función 'notice'
() -> ejecución, 'undefined'
*/

// EJEMPLO2

// 1-Avisar cuando llegue
// 2-Avisar cuando vaya de regreso
// 3-Avisar cuando ya esté en casa

function goingToSupermarket(callback) /*cb*/ {
    console.log('Yendo al supermercado');
    console.log('Llegué al supermercado');
    callback('Hola mamá, ya llegué al supermercado');
    console.log('Compré la despensa');
    console.log('Pagué la cuenta');
    callback('Hola mamá, ya voy de regreso');
    console.log('Ya estoy en casa');
    callback('Hola mamá, ya estoy en casa :D');
}

// callback cb

function notice(message) {
    console.log(message);
}

goingToSupermarket(notice);

// Aplicación de un cb, en back-end -> Manejar eventos asíncronos

/*
const notice2
*/
/*
goingToSupermarket((message)) => {
    console.lg(message)
}
*/

