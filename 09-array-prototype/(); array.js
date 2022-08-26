console.log(Array.prototype);

let arrayOne = [1,2,3,4,5];
let arrayTwo = [6,7,8,9,10];

'victorcosmema@gmail.com'.toUpperCase

const newArray = arrayOne.concat(arrayTwo);

console.log(newArray);

Array.prototype.concat = function(array) {
    console.log('Este es el array al que apuntamos')
    return [...this, ...array];
}

const otherArray = arrayOne.concat(arrayTwo);

console.log(otherArray);


Array.prototype.filter
Array.prototype.unshift
Array.prototype.unshift
Array.prototype.unshift
Array.prototype.push
Array.prototype.pop
Array.prototype.slice
Array.prototype.sort
Array.prototype.find
Array.prototype.map
Array.prototype.reduce