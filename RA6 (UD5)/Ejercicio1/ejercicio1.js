// Apartado 1
let nuevoTitulo = document.getElementById('titulo');
nuevoTitulo.innerHTML = 'Andrés Esparza Baños';

// Apartado 2
let segundaImagen = document.querySelectorAll('img')[1];
segundaImagen.src = "noticia1.jpg";

// Apartado 3
let articulos = document.querySelectorAll('article');
ultimoArticulo = articulos[articulos.length - 1];
ultimoArticulo.style.display = 'none';

// Apartado 4
// let articulos = document.querySelectorAll('article'); (DEL APARTADO 3)
articulos.forEach((articulo, i) => {
    let primerDiv = articulo.firstElementChild;
    primerDiv.textContent = (i+1) + ' - ' + primerDiv.textContent;
});

// Apartado 5
articulos.forEach((articulo) => {
    let primerDiv = articulo.firstElementChild;
    primerDiv.classList.add('cabecera');
});

// Apartado 6
let cadena = "Servicio Murciano de Salud";
let nuevaCadena = "S.M.S.";
document.body.innerHTML = document.body.innerHTML.replaceAll(cadena, nuevaCadena);