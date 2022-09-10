let smallPencil = { // object
    size: 'Pequeño',
    shape: 'Hexagonal',
    color: 'Amarillo',
    write: (text) => { // method -> function
        return 'Usé mi lápiz para escribir el texto ' + text;
    }
}

let bigPencil = {
    size: 'Grande',
    shape: 'Circular',
    color: 'Verde',
    write: (text) => {
        return 'Usé mi lápiz para escribir el texto ' + text;
    }
}

console.log(smallPencil.color);
console.log(smallPencil.shape);
console.log(smallPencil.size);
console.log(smallPencil.write('Víctor Cosme.'));
console.log(bigPencil.color);
console.log(bigPencil.shape);
console.log(bigPencil.size);
console.log(bigPencil.write('Víctor Cosme.'));


function Pencil(size, shape, color) {
    this.size = size;
    this.shape = shape;
    this.color = color;
    this.write = (text) => {
        return 'Usé mi lápiz para escribir el texto ' + text + '.';
    } 
}

let redPencil = new Pencil('Pequeño', 'Redondo', 'Rojo'); // Entrega del lápiz
let greenPencil = new Pencil('Mediano', 'Redondo', 'Verde');
let redText = redPencil.write('Este texto lo escribí con mi lápiz rojo'); // Utilización del lápiz, es decir, escribir
let greenText = greenPencil.write('Este texto lo escribí con mi lápiz verde');
console.log(redPencil); // Expected output: Pencil {size: 'Pequeño', shape: 'Redondo', color: 'Rojo', write: ƒ} 
                        // Usé mi lápiz para escribir el texto.

console.log(redText); // Este texto lo escribí con mi lápiz rojo.

console.log(greenPencil);
console.log(greenText);



// object
    // características y métodos 

// función constructora / factory construction
    // new
    // this

// prototypes
    // native prototypes

// clase > exetensión > instancia











