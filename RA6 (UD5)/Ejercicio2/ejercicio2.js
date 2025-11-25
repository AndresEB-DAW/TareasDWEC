// Apartado 1
let titulo = document.querySelector('body');
titulo.innerHTML = "<h1>Andrés Esparza Baños</h1>";

// Apartado 2
let contenedor = document.querySelector('body');
contenedor.innerHTML += "<div id='contenedor'></div>";

// Apartado 3
let articulos = datos;
let divArticulo = document.getElementById('contenedor');
articulos.forEach(articulo => {
    divArticulo.innerHTML += `
        <article>
        <div class="nombre">${articulo.nombre}</div>
        <div class="descripcion">${articulo.descripcion}</div>
        <div class="precio">${articulo.precio}</div>
        <img src="${articulo.imagen}">
    </article>
    `;
});

// Apartado 4
let nombres = document.querySelectorAll('.nombre');
nombres.forEach(nombre => {
    nombre.classList.add('negrita', 'centrado');
});
let descripciones = document.querySelectorAll('.descripcion');
descripciones.forEach(descripcion => {
    descripcion.classList.add('centrado');
});
let precios = document.querySelectorAll('.precio');
precios.forEach(precio => {
    precio.innerHTML = precio.innerHTML + " €";
    precio.classList.add('centrado');
});
let imagenes = document.querySelectorAll('img');
imagenes.forEach(imagen => {
    imagen.classList.add('foto');
});
