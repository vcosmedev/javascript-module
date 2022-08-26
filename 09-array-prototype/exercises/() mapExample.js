// map -> transform

Array.prototype.map // definiton -> 

const arrayOne = [1, 4, 9, 16];

// pass a function to map
const mapOne = arrayOne.map(x => x * 2);

console.log(mapOne);

// expected output [2, 8, 18, 32]

/* 
Same as previous:

const arrayOne = [1, 4, 9, 16];
// pass a function to map
let duplicate = function(x) {
    return x * 2;
}
const mapOne = arrayOne.map(duplicate);
console.log(mapOne);

*/

