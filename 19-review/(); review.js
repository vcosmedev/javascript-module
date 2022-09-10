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
        console.log(`Este animal es ${feeding}.`)
    } // De esta forma se define un método que forma parte de una clase
}

const dog = new Animal(true, 2, 4, 'white'); // Instancia
console.log(dog.heart);
dog.eat('Carnívoro facultativo');