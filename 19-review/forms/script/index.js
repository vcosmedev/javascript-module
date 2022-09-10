const input = document.querySelector('input'); // Genero una variable con el nombre del 'nodo' que queremos obtener
// console.log(input.__proto__); // propiedad 'prototype' o '__proto__' nos muestra el 'plano' (prototipo) que se utilizó para generar el objeto
// const inputFilled = document.querySelector('input');
// console.log(inputFilled.value); // expected output: no imprime nada, se necesita catchar el valor registrado

input.addEventListener('keypress', (event) => {
    const key = event.key;
    //console.log(event);
    const value = input.value;
    console.log(`Alguien presionó la tecla ${key}, y el valor del input se actualizó a ${value}.`);
});

// addEventListener: propiedad que realmente es un método
// addEventListener es una función que recibe dos parámetros









