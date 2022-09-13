/*

Generar un programa que nos muestre la fecha del dia de hoy con el siguiente formato: "YYYY MM DD".

*/


const getHelloWorldStr = () => "Hello, world!"
console.log(getHelloWorldStr());

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


