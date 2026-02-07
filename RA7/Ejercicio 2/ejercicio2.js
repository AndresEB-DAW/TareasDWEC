// Campo select para filtrar por categoría
const select = document.createElement("select");
select.id = "Categorías";
select.innerHTML = `
  <option value="todas">Todas</option>
  <option value="carretera">Carretera</option>
  <option value="gravel">Gravel</option>
  <option value="mtb">MTB</option>`
document.body.appendChild(select);

// Contenedor principal
const contenedor = document.createElement("div");
document.body.appendChild(contenedor);

// Recuperamos los datos de la API
let url = 'http://api.raulserranoweb.es/rest.php';
fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos => mostrarDatos(datos))
    //.then(datos => console.dir(datos))
    .catch(error => console.error("Error al obtener los datos:", error));

// Función para mostrar los datos
function mostrarDatos(datos) {
    //console.log(datos);
    let divArticulos = document.createElement('div');
    divArticulos.classList.add("formatoArticulos");
    contenedor.appendChild(divArticulos);

    datos.forEach(articulo => {
        let art = document.createElement("article");

        let img = document.createElement("img");
        img.src = `http://api.raulserranoweb.es/imagenes_art/${articulo.cod}`;

        let nombre = document.createElement("div");
        nombre.innerHTML = `<span>Nombre: </span>${articulo.nom}`;

        let descripcion = document.createElement("div");
        descripcion.innerHTML = `<span>Descripción: </span>${articulo.des}`;

        let codigo = document.createElement("div");
        codigo.innerHTML = `<span>Nombre: </span>${articulo.cod}`;

        art.appendChild(img);
        art.appendChild(nombre);
        art.appendChild(descripcion);
        art.appendChild(codigo);

        divArticulos.appendChild(art);
    });
}

// Función para cargar los artículos con su categoría
function cargarArticulos(categoria = "todas") {
    let url = "http://api.raulserranoweb.es/rest.php";

    if (categoria !== "todas") {
        url += `?cat=${categoria}`;
    }

    fetch(url)
        .then(res => res.json())
        .then(datos => {
            contenedor.innerHTML = "";   // limpiar
            mostrarDatos(datos);
        })
        .catch(err => console.error(err));
}


// Evento para filtrar los artículos por categoría
select.addEventListener("change", function () {
    cargarArticulos(select.value);
});