/*
Crear función find()

Crear una función find que acepte un array y un callback y que:

por cada elemento del array ejecute el callback pasándole dicho elemento como argumento

devuelva el elemento pasado como argumento del primer callback que devuelva true

si ningún callback devuelve true, devuelva undefined
*/

// Casos a resolver


// 1) [12, 45, 67, 24, 12] -> 12 Devolver el elemento número 12 dentro del array. Si no se encuentra, devolver 'Undefined'.

const numbers = [12, 45, 67, 24, 12]; 

function find (array, callback){
    for(i=0; i<array.length; i++) {
        const currentElement = array[i];
        const itsFound = callback(currentElement);
        if(itsFound){
            return currentElement;
        }
    }
    return undefined;
}

const cb1 = (number) => {
    if(number %12 === 0){
        return true;
    }
    return false;
}

// The find() method returns the first element in the provided array that satisfies the provided testing function. 
// If no values satisfy the testing function, undefined is returned.

const divisibleBy12 = find(numbers, cb1);
console.log(divisibleBy12);


// 2) ['Cin', 'Jonatan', 'Fanny', 'Manu'] -> Cin Devolver el elemento 'Cin' dentro del array. Si no se encuentra, devolver 'Undefined'.

const koders = ['Cin', 'Jonatan', 'Fanny', 'Manu'] 

function find(array, callback){
    for(i=0; i<array.length; i++) {
        const currentElement = array[i];
        const itsFound = callback(currentElement);
        if(itsFound){
            return currentElement;
        }
    }
}

const cb2 = (koder) => {
    if(koder === 'Cin'){
        return true;
    }
    return false;
}

const findingCin = find(koders, cb2);
console.log(findingCin);


/* 3) Del array dado, devolver -> { name: 'JavaScript', mentor: 'Aldo'};

[
    {
        name: 'Algoritmos',
        mentor: 'Odoon y Auro'
       },
       {
        name: 'Maquetado',
        mentor: 'Fernanda'
       }, 
       {
        name: 'JavaScript',
        mentor: 'Aldo'
       },
       {
        name: 'React',
        mentor: 'Dani'
       }
     ]; 
   
*/


const mentors = [
    {
        name: 'Algoritmos',
        mentor: 'Odoon y Auro'
       },
       {
        name: 'Maquetado',
        mentor: 'Fernanda'
       }, 
       {
        name: 'JavaScript',
        mentor: 'Aldo'
       },
       {
        name: 'React',
        mentor: 'Dani'
    }
];

function find(object, callback) {
    for(i=0; i<object.length ; i++) {
        const currentElement = object[i];
        const itsFound = callback(currentElement);
        if(itsFound){
            return currentElement;
        }
    }
}

const cb3 = (mentorObject) => {
    if(mentorObject.name === 'JavaScript' && mentorObject.mentor === 'Aldo'){
        return true;
    } 
} 

const findingAldo = find(mentors, cb3);
console.log(findingAldo);


// Refactorización

const mentorsRefact = [
    {
     name: 'Algoritmos',
     mentor: 'Odoon y Auro'
    },
    {
     name: 'Maquetado',
     mentor: 'Fernanda'
    }, 
    {
     name: 'JavaScript',
     mentor: 'Aldo'
    },
    {
     name: 'React',
     mentor: 'Dani'
    }
  ];

function find(object, callback) {
    for(i=0; i<object.length ; i++) {
        const currentElement = object[i];
        const itsFound = callback(currentElement);
        if(itsFound){
            return currentElement;
        }
    }
}

const findingAldoRefact = find(mentorsRefact, (m) => m.name === 'JavaScript' && m.mentor === 'Aldo');
console.log(findingAldoRefact);