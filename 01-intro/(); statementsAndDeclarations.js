// Statements and Declarations
// Estruturas de control


// if

let logged = "true";
let creditCardOwner = false;

if(true) {
    console.log('El valor que está dentro del if es verdadero')

}

if(logged && creditCardOwner) {
    console.log('Puede revisar el detalle de la tarjeta');
} else {
    console.log('El usuario no está logueado o no tiene tarjeta de crédito');
}

if(logged && creditCardOwner) {
    console.log('Puede revisar el detalle de la tarjeta');
} else if (logged === false && creditCardOwner) {
    console.log('El usuario no está logueado o no tiene tarjeta de crédito');
}


// switch

let step = 2;

switch(step) {
    case 1:
        console.log('Personal data');
    case 2:
        console.log('Academic data');
    default: // else
    console.log('There is no data to complete');
}