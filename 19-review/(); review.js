function Animal(heart, eyes, bodyExtremities, color) {
    this.heart = heart;
    this.eyes = eyes;
    this.bodyExtremities = bodyExtremities;
    this.color = color;
    this.eat = (feeding) => {
        console.log(`Este animal es ${feeding}.`)
    }
}

const snake = new Animal(true, 2, false, 'green'); // Instancia
console.log(snake.heart);
snake.eat('Carnívoro');

const cat = new Animal(true, 2, false, 'black'); // Instancia
console.log(cat.heart);
cat.eat('Carnívoro');


class Animal {  // Método constructor
    constructor(heart, eyes, bodyExtremities, color) { // constructor -> palabra reservada que se utiliza cuando se trabaja con clases
        this.heart = heart;
        this.eyes = eyes;
        this.bodyExtremities = bodyExtremities;
        this.color = color;
    }

    eat(feeding) { // Sugar syntax al momento de definir un método dentro de una clase
        return `Este animal es ${feeding}.`;
    } // De esta forma se define un método que forma parte de una clase
}

// Herencia

// class Oviparous extends Animal { // Extends -> Palabra reservada que nos permite 'extender' clases (extensiones de clase) (A esta extensión se le llama cadena de prototipos)
//     constructor (bornFromEggs) {
//         super(true, 3, true);
//         this.bornFromEggs = bornFromEggs; // 'super' -> method // siempre hay que llamar a la función antes de asignarle una extensión, en este caso 'bornFromEggs'
//     }
// }

// const dog = new Animal(true, 2, 4, 'white'); // Instancia
// console.log(dog.heart);
// let outPut = dog.eat('Carnívoro facultativo');
// console.log(outPut);

// const bird = new Oviparous(true);
// console.log(bird);

// const sqirtle = new Oviparous(true);
// console.log(sqirtle);

// const anotherAnimal = new Oviparous(false);
// console.log(anotherAnimal);

// CUANDO QUEREMOS TENER LOS OBJETOS COMO LOS QUEREMOS ASIGNAR, ES DECIR, CON PARÁMETROS DIFERENTES, AD HOC, 
// LO PODEMOS HACER DE ESTA FORMA:
class Oviparous extends Animal { // Extends -> Palabra reservada que nos permite 'extender' clases (extensiones de clase) (A esta extensión se le llama cadena de prototipos)
    constructor (heart, eyes, bodyExtremities, color, bornFromEggs) {
        super(heart, eyes, bodyExtremities, color);
        this.bornFromEggs = bornFromEggs; // 'super' -> method // siempre hay que llamar a la función antes de asignarle una extensión, en este caso 'bornFromEggs'
    }
}

class Reptile extends Oviparous { // Extends -> Palabra reservada que nos permite 'extender' clases (extensiones de clase) (A esta extensión se le llama cadena de prototipos)
    constructor (heart, eyes, bodyExtremities, color, bornFromEggs, reptilesCrawl) {
        super(heart, eyes, bodyExtremities, color, bornFromEggs);
        this.reptilesCrawl = reptilesCrawl; // 'super' -> method // siempre hay que llamar a la función antes de asignarle una extensión, en este caso 'bornFromEggs'
    }
}

const anotherAnimal = new Oviparous(true, 2, 4, 'white', true, true);
console.log(anotherAnimal);

const crocodile = new Reptile (true, 2, 4, 'green', true, true);
console.log(crocodile);



// TASK -> Realizar ejemplos de otros animales (ovíparos, vivíparos).



