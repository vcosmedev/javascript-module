/*Math is a built-in object that has properties and methods for mathematical constants and functions. 
It's not a function object.*/

/*
07-Math: 
Generar una función que calcule el área de un círculo. El radio del círculo se pasará como parámetro de dicha función.
*/

const circleArea = (radius) => {
    let area = (Math.PI * (radius * radius)); // Cálculo área del círculo a través del método Math
    //console.log(Math.round(area*100)/100);
    return area;
}

console.log(circleArea(5));

