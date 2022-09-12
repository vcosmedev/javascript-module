function greeting(greet) {
    let time = 2000;
    setInterval(greet,time);
};

let greet = () => {
    console.log('Hola, esto es un saludo cada 2 segundos :)');
};

greeting(greet);