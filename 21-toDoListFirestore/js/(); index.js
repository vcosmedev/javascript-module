// Importar función saveTask para que pueda ser utilizada en nuestro JS

import {saveTask} from './(); firebase';

// Obtener datos de mi interfaz

const button = document.querySelector('button');
// Cuando se haga click en nuestro botón, se realizará una acción: en este caso, obtener los valores (es lo que indicamos dentro de la función)
button.addEventListener('click', (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value;
    // Traemos la propiedad value del objeto que está en title y la guardamos en la const title
    const description = document.querySelector('#description').value;
    // Traemos la propiedad value del objeto que está en description y la guardamos en la const description
    console.log(title, description);
    saveTask(title, description);

});