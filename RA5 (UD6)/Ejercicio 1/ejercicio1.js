// Contenedor principal
const contenedor = document.createElement("div");
contenedor.classList.add("contenedor");

// Contenedor secundario del datáfono
const datafono = document.createElement("div");
datafono.classList.add("datafono");

// Pantalla
const pantalla = document.createElement("div");
pantalla.classList.add("pantalla");

// Teclado
const teclado = document.createElement("div");
teclado.classList.add("teclado");

// Botones numéricos aleatorios
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numeros.sort(() => Math.random() - 0.5);

numeros.forEach(num => {
    const boton = document.createElement("button");
    boton.classList.add("boton");
    boton.textContent = num;
    teclado.appendChild(boton);
});

// Acciones
const acciones = document.createElement("div");
acciones.classList.add("acciones");

const botonClear = document.createElement("button");
botonClear.classList.add("btn-clear");
botonClear.textContent = "C";

const botonValidar = document.createElement("button");
botonValidar.classList.add("btn-validar");
botonValidar.textContent = "VALIDAR";

// Mensaje
let mensaje = document.createElement("div");
mensaje.classList.add("mensaje");

// Montaje final
acciones.appendChild(botonClear);
acciones.appendChild(botonValidar);

datafono.appendChild(pantalla);
datafono.appendChild(teclado);
datafono.appendChild(acciones);

contenedor.appendChild(datafono);
contenedor.appendChild(mensaje);

document.body.appendChild(contenedor);

// Funciones
let contraseña = "";

teclado.addEventListener("click", function (e) {
    if (e.target.classList.contains("boton")) {
        contraseña += e.target.textContent;
        pantalla.textContent = "*".repeat(contraseña.length);

    }
});

botonClear.addEventListener("click", function () {
    if (contraseña.length > 0) {
        contraseña = contraseña.slice(0, -1);
        pantalla.textContent = "*".repeat(contraseña.length);
    }
});

let pin = /^9999$/;
botonValidar.addEventListener("click", function () {
    if (contraseña.length !== 4) {
        mensaje.textContent = "El PIN debe tener 4 dígitos.";
    } else if (pin.test(contraseña)) {
        mensaje.textContent = "PIN correcto. Acceso concedido.";
    } else {
        mensaje.textContent = "PIN incorrecto. Acceso denegado.";
    }
});
