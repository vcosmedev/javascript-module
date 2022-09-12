// 1- Crear una función que salude cada 2 segundos.

function greeting(greet) {
    let time = 2000;
    setInterval(greet,time);
};

let greet1 = () => {
    console.log('Hola, esto es un saludo cada 2 segundos :)');
};

greeting(greet1);
// clearInterval(greeting); -> Stop setInterval


// 2 - Crear una función que te salude y haz que se ejecute tras 10 segundos.

function greeting (greet){
    setTimeout(greet,10000);
};

let greet2 = () => {
    console.log('Hola, esto es un saludo que se ejecuta tras 10 segundos :)');
};

greeting(greet2);







