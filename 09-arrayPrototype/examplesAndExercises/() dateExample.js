/*

JS provee de un tipo de dato llamado Date(objeto), con el que podemos trabajar de forma fácil y práctica con fechas. Sin embargo, 
trabajar con fechas no es fácil y la primera ez que tenemos que hacerlo es muy sencillo equivocarse si no tenemos claros 
ciertos conceptos.

Se le conoce como objeto global.

*/

// Obtenemos la fecha actual y la guardamos en la variable date
const dateOne = new Date();

// Obtenemos la fecha 30 de enero de 2018, a las 23h 30min 14seg

const dateTwo = new Date('2018/01/30 23:30:14');

// Obtenemos la fecha del juicio final a partir de un timestamp (número de segundos trasncurridos a partir de una fecha) o tiempo UNIX:

const dateThree = new Date(872817240000);

// Creamos una fecha pasando cada uno de sus componentes numéricos*
const dateFour = new Date (2018, 0, 30, 23, 30, 14, 0);


Date.prototype.getDate();
// prototype; retorna el día del mes (1-31) para una fecha especifica se´gun el tiempo local

Date.prototype.getDay();
// prototype; retorna el día de la semana (0-6) para una fecha específica según elt iempo local

Date.prototype.getFullYear();
// prototype; 

Date.prototype.getHours();
// prototype; 

Date.prototype.getMilliseconds();
// prototype; 

Date.prototype.getMinutes();
// prototype; 

Date.prototype.getMonth();
// prototype; retorna el mes (0-12) para una fecha específica

Date.prototype.getSeconds();
// prototype; retorna los segundos (0-59) para una fecha específica según elt iempo local

Date.prototype.getTime();
// prototype; retorna el valor numérico de una fecha específica desde enero 1 1970 UTC.




// Generar un programa que nos muestre la fecha del dia de hoy con el siguiente formato: "YYYY MM DD"

const todaysDate = () => {
    // genero objeto tipo Date
    const today = new Date();
    // obtengo el día del mes a partir del objeto que generé
    const day = today.getDate();
    // obtengo el número del mes
    const month = today.getMonth();
    // obtengo el año
    const year = today.getFullYear(); 

    const currentDate = `${year} ${month} ${day}`;

    // imprimo
    console.log(currentDate);
}

todaysDate(); // expected output: [2022 7 29]












