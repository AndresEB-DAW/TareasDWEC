// Contenedor principal
const contenedor = document.createElement("div");
document.body.appendChild(contenedor);

// Input para el buscador
const input = document.createElement("input");
input.placeholder = "Buscar nombre...";
contenedor.appendChild(input);

// Botón para buscar aunque no es necesario, se busca al escribir en el input.
const botonBuscar = document.createElement("button");
botonBuscar.textContent = "Buscar";
contenedor.appendChild(botonBuscar);

// Recuperamos los datos de la API
let url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos => mostrarDatos(datos))
    //.then(datos => console.log(datos))
    .catch(error => console.error("Error al obtener los datos:", error));

// Creamos la función para mostrar los datos obtenidos en una tabla
function mostrarDatos(datos) {
    let tabla = document.createElement("table");
    let filaEncabezados = document.createElement("tr");
    let encabezadoNombre = document.createElement("th");
    encabezadoNombre.textContent = "Nombre";
    let encabezadoCalle = document.createElement("th");
    encabezadoCalle.textContent = "Calle";
    let encabezadoCiudad = document.createElement("th");
    encabezadoCiudad.textContent = "Ciudad";
    contenedor.appendChild(tabla);
    tabla.appendChild(filaEncabezados);
    filaEncabezados.appendChild(encabezadoNombre);
    filaEncabezados.appendChild(encabezadoCalle);
    filaEncabezados.appendChild(encabezadoCiudad);
    for (let i in datos) {
        let usuario = document.createElement("tr");
        let nombre = document.createElement("td");
        nombre.textContent = datos[i].name;
        let calle = document.createElement("td");
        calle.textContent = datos[i].address.street;
        let ciudad = document.createElement("td");
        ciudad.textContent = datos[i].address.city;
        tabla.appendChild(usuario);
        usuario.appendChild(nombre);
        usuario.appendChild(calle);
        usuario.appendChild(ciudad);
        if (i % 2 === 1) {
            tabla.rows[i].classList.add("fila-par");
        }
    }


}

// Añadimos un evento al input que filtra la tabla cuando coincide el texto introducido con parte del nombre de algún usuario
// Modifica el estilo de cebreado de las filas para que se mantenga
input.addEventListener("input", function () {
    let valorBusqueda = input.value.toLowerCase();
    let filas = contenedor.querySelectorAll("tr");
    let visible = 0;

    filas.forEach(fila => {
        const celda = fila.querySelector("td");
        if (!celda) return; // por si es th

        const nombre = celda.textContent.toLowerCase();

        if (nombre.includes(valorBusqueda)) {
            fila.style.display = "";
            fila.classList.remove("fila-par");
            if (visible % 2 === 0) {
                fila.classList.add("fila-par");
            }
            visible++;
        } else {
            fila.style.display = "none";
        }
    });
});