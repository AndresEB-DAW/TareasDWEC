// Contenedor principal
const contenedor = document.createElement("div");
contenedor.classList.add("contenedor");

// Titulo
const titulo = document.createElement("div");
titulo.classList.add("titulo");
titulo.textContent = "LOTERÍA PRIMITIVA";

// Teclado
const teclado = document.createElement("div");
teclado.classList.add("teclado");

// Botones numéricos 
for (let i = 1; i <= 49; i++) {
    const boton = document.createElement("button");
    boton.classList.add("boton");
    boton.textContent = i;
    teclado.appendChild(boton);
};

// Sorteo
const sorteo = document.createElement("div");
sorteo.classList.add("sorteo");

const botonSorteo = document.createElement("button");
botonSorteo.classList.add("btn-sorteo");
botonSorteo.textContent = "Realizar Sorteo";

// Mensaje
let mensaje = document.createElement("div");
mensaje.classList.add("mensaje");

// Montaje final
sorteo.appendChild(botonSorteo);

contenedor.appendChild(titulo);
contenedor.appendChild(teclado);
contenedor.appendChild(sorteo);
contenedor.appendChild(mensaje);

document.body.appendChild(contenedor);

// Funciones
// Seleccionar números
teclado.addEventListener("click", function (e) {
    let seleccionados = document.getElementsByClassName("seleccionado");
    let cantidad = seleccionados.length;
    if (e.target.tagName === "BUTTON" && cantidad < 6) {
        e.target.classList.toggle("seleccionado");
        mensaje.textContent = "";
    }
    if (cantidad == 6 && e.target.classList.contains("seleccionado")) {
        e.target.classList.toggle("seleccionado");
        mensaje.textContent = "";
    } else if (cantidad == 6 && e.target.classList.contains("seleccionado") === false) {
        mensaje.textContent = "Solo puedes seleccionar 6 números.";
    }
});

// Realizar sorteo
botonSorteo.addEventListener("click", function () {
    // Eliminamos los datos del sorteo anterior (si existen)
    const botonesSorteo = sorteo.querySelectorAll(".botonResultado");
    botonesSorteo.forEach(boton => boton.remove());

    // Función para realizar el sorteo
    function realizarSorteo(x, y) {
        if (document.querySelectorAll(".seleccionado").length < 6) {
            return;
        }
        let numeros = Array.from({ length: y }, (_, i) => i + 1);
        let resultado = [];

        for (let i = 0; i < x; i++) {
            let indice = Math.floor(Math.random() * numeros.length);
            resultado.push(numeros[indice]);
            numeros.splice(indice, 1);
        }

        return resultado;
    }
    // Mostrar los resultados
    let resultado = realizarSorteo(6, 49);
    if (!resultado) {
        return;
    }
    for (let i = 0; i < 6; i++) {
        const boton = document.createElement("button");
        boton.classList.add("botonResultado");
        boton.textContent = resultado[i];
        sorteo.appendChild(boton);
    }
});

// Funcion para comprobar aciertos
botonSorteo.addEventListener("click", function () {
    let seleccionados = document.querySelectorAll(".seleccionado");
    let resultados = document.querySelectorAll(".botonResultado");
    let aciertos = 0;

    seleccionados.forEach(seleccionado => {
        resultados.forEach(resultado => {
            if (seleccionado.textContent === resultado.textContent) {
                aciertos++;
            }
        });
    });
    if (seleccionados.length < 6) {
        mensaje.textContent = "Debes seleccionar 6 números antes de realizar el sorteo.";
        return;
    }
    mensaje.textContent = `Has tenido ${aciertos} aciertos.`;
});