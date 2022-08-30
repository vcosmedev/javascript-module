/*

JS nos provee de un tipo de dato llamado Math(Objeto) con el que podemos trabajar de forma fácil y práctica con números.
Se le conoce como objeto global.

*/

Math.E          // 
Math.LN2        // 
Math.LN10       // 
Math.LOG2E      // 
Math.LOG10E     // 
Math.PI         // 
Math.SQRT1_2    // 
Math.SQRT2      // 


Math.abs(x)             // Devuelve valor absoluto de X |X|
Math.sign(x)            // Devuelve el signo del número: 1 positivo, 1 negativo
Math.exp(x)             // Exponenciación; devuelve el número e elevado a X 
Math.expm1(x)           // Equivalente a Math.exp(x) - 1. ex-1
Math.max(a,b,c)         // Devuelve el número más grande de los indicados por parámetro
Math.min(a,b,c)         // Dvuelve el número más pequeño de los indicados por parámetro
Math.pow(base,exp)      // Potenciación
Math.sqrt(x)            // Devuelve la raíz cuadrada de X
Math.cbrt(x)            // Devuelve la raíz cúbica de X
Math.imul(a, b)         // Equivalente a a*b pero a nivel de bits
Math.clz32(x)           // Devuelve el número de ceros a la izquierda de X en binario (32 bits)




// Example const additionWithPi 




function circleArea (radius) {
    let area = Math.PI * Math.pow(radius,2); // método estático -> es llamado desde la función constructora
    console.log(area);
}

circleArea(15);

// REPLICAR EJEMPLO ANTERIOR CON UNA ARROW FUNCTION
// let circleArea = () => {
//     let area = Math.PI * Math.pow(radius,2);
//     console.log(area);
// }

// circleArea();

// Método, objeto, función
const Math = {
    pow: function(hum, exp) {
        return num ** exp;
    }
}
