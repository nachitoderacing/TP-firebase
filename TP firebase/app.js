
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyBptAmD9KcEgDYpUFl1mKMy4rdtAw6gJ3g",
  authDomain: "tpfb-jesusimm.firebaseapp.com",
  databaseURL: "https://tpfb-jesusimm-default-rtdb.firebaseio.com",
  projectId: "tpfb-jesusimm",
  storageBucket: "tpfb-jesusimm.firebasestorage.app",
  messagingSenderId: "88306962302",
  appId: "1:88306962302:web:456044d776ea12a3e9ed2f"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const btnAgregar = document.getElementById('agregar');
const contenedorCatalogo = document.getElementById('catalogo');


btnAgregar.addEventListener('click', () => {
    const id = document.getElementById('ID').value;
    const nombre = document.getElementById('nombre').value;
    const ubicacion = document.getElementById('ubicacion').value;
    const especialidad = document.getElementById('especialidad').value;
    const imagen = document.getElementById('imagen').value;

    if (!id || !nombre || !ubicacion || !especialidad || !imagen) {
        alert("Por favor completa todos los campos antes de registrar la galería.");
        return;
    }
    
    set(ref(database, '' + id), {
        id: id,
        nombre: nombre,
        ubicacion: ubicacion,
        especialidad: especialidad,
        imagen: imagen
    })
    .then(() => {
        alert("¡Galería registrada correctamente!");

        ID = ''
        nombre = ''
        ubicacion = ''
        especialidad = ''
        imagen = ''
    })

})