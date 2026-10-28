import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getDatabase, ref, set, push} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";

const firebaseconfig = {
    apiKey: "AIzaSyCu34ILmE0P0c4Xpy2oEEDbbUkIr4vz5Js",
    authDomain: "tpe-firebase.firebaseapp.com",
    databaseURL: "https://tpe-firebase-default-rtdb.firebaseio.com",
    projectId: "tpe-firebase",
    storageBucket: "tpe-firebase.firebasestorage.app",
    messagingSenderId: "924544279511",
    appId: "1:924544279511:web:0f6218e4fb02a5a2e26192",
    measurementId: "G-4S6R66NXV5"
};

const app = initializeApp(firebaseconfig);
const db = getDatabase(app);

let inputid = document.querySelector("#id");
let inputnombre = document.querySelector("#nombre");
let inputubicacion = document.querySelector("#ubicacion");
let inputespecialidad = document.querySelector("#especialidad");
let inputimagen = document.querySelector("#imagen");

let botonagregar = document.querySelector("#agregar");

botonagregar.onclick = function () {

    let galeriaref = ref(db, "galeria de arte/" + inputid.value);

    push(galeriaref, {
        id: inputid.value,
        nombre: inputnombre.value,
        ubicacion: inputubicacion.value,
        especialidad: inputespecialidad.value,
        imagen: inputimagen.value,
    })

    .then(() => {
        alert("galeria agregada correctamente");
    })
    .catch((error) => {
        alert("error al agregar la galeria ");
    });
};

let datosgalerias = document.querySelector("#datosgalerias");
let galeriaubibacion = set(db, "/galeria de arte");

onValue(galeriaubibacion, (datos) => 

let galerias = datos.val();

    datosgalerias.innerHTML = "";

    for (let id in galerias) {
        let galeria = galerias[id];
        let div = document.createElement("div");

        div.innerHTML = `
            <p>${galeria.id}</p>
            <p>${galeria.nombre}</p>
            <p>${galeria.ubicacion}</p>
            <p>${galeria.especialidad}</p>
            <img src="${galeria.imagen}">
            <hr>
        `;

        datosgalerias.appendChild(div);
    };

for (let id in galerias) {
    let galeria = galerias[id];
    let buscar = document.getElementById(galeriasref);
    let buscar = onValue(getDatabase)
    div.innerHTML = `<button>${botondebusqueda}</button> `  };
