// Conexión Firebase
// Se extrae Project Settings, Use a <script> tag
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";

// Conexión con Firstone
// Importar función getFirestore
import { getFirestore, addDoc, deleteDoc, updateDoc, getDoc, collection } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
// Función addDoc -> Permite indicar a Firsetore que queremos guardar un objeto en la base de datos que queremos
// Función collection -> Importamos función que permite indicar a Firestore en dónde queremos guardar los objetos ('en qué canasta')

// Se pasa como un objeto -
const firebaseConfig = {
    apiKey: "AIzaSyDmZBybkKont7R-oBKSI0I-qDa6KqZcUGQ",
    authDomain: "kodjsmodule.firebaseapp.com",
    projectId: "kodjsmodule",
    storageBucket: "kodjsmodule.appspot.com",
    messagingSenderId: "791739212191",
    appId: "1:791739212191:web:e8f9778b2c77d8363e1daa",
    measurementId: "G-MZ4GKQ5T95"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(); // Devuelve la conexión a la base de datos (db)
                            // Cuando invoquemos a la constante, estaremos haciendo llamadas a la bbdd


// Generar función que ayude a guardar una tarea (canasta-collection tipo tarea-task)

// export const saveTask = (title, description) => {
//     addDoc(collection(db, 'tasks'), {
//         title: 'titulo',
//         description: 'description'
//     }); // Se indica que se quiere guardar en un db y de qué tipo y en qué canasta queremos guardarlo
// };

export const saveTask = (title, description) => {
        const objectToBeSaved = { 
            title: 'titulo',
            description: 'description'
        }; 
    };

    const container = collection(db, "tasks");
    addDoc(container, objectToBeSaved); // Se declara una constante 'container' y se le indica que se quiere guardar en un db y de qué tipo y en qué canasta queremos guardarlo
                   