// SCOPE -> Lugar donde viven las variables. Dos tipos: LOCAL y GLOBAL.
    // LOCAL -> La variable está dentro de un bloque de código (generalmente dentro de una función).
    // GLOBAL -> La variable está declarada fuera de una función, tiene un scope global. Tiene visibilidad total y es visible por todos.


    // Global scope de la variable 'deliveryDate'

    let deliveryDate = '06/09/22'
    function cakeMaker(flavour, shape) {
        return `El sabor de este pastel es ${flavour}, su forma es ${shape} y la fecha de entrega es hoy día ${deliveryDate}.`;
    }
    // console.log(cakeMaker('chocolate', 'redonda'));
    
    let orderOne = cakeMaker('chocolate', 'redonda');
    let orderTwo = cakeMaker('vainilla', 'rectangular');
    let orderThree = cakeMaker('caramelo', 'cuadrada');
    // Al asignar el retorno de una función a una variable, podemos reutilzar este retorno más adelante
    
    console.log(orderOne);
    console.log(orderTwo);
    console.log(orderThree);