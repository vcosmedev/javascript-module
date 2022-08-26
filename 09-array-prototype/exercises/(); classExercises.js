/*
1. Función que se encargue de paserar elementos
2. Función que concatene los elementos (arrays)
3. Mandar llamar las dos funciones anteriores (concat)
4. Expected output: ['Aldo sale a las 09:00', 'Aldo sale a las 11:00', 'Aldo sale a las 13:00' ]
*/

const flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    passengers: [{
        name: 'Aldo',
        edad: 30
    }, {
        name: 'Juan',
        edad: 30
    },
    {
        name: 'Alberto',
        edad: 30
    },
    {
        name: 'Judith',
        edad: 30
    }]
};


let schedules = ['09:00', '10:00', '11:00', '12:00'];

let array = ['Aldo sale a las 09:00', 'Juan sale a las 10:00', 'Alberto sale a las 11:00', 'Judith sale a las 12:00']


// 1.- Funcion que se encargue de parsear el objeto flight
// 2.- Funcion que concatene los elementos(arreglos)
// 3.- Que mande llamar las dos funciones anteriores 
// 4.- El resultado debe ser algo parecido a lo siguiente
// let array = ['Aldo sale a las 09:00', 'Aldo sale a las 09:00', 'Aldo sale a las 09:00', 'Judith sale a las 12:00']


