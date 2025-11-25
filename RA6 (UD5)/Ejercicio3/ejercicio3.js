// Elemento h3 para avisos al principio de la página
let avisos = document.createElement("h3");
avisos.id = "avisos";
document.body.prepend(avisos);

// Elementos del formulario
let nombre = document.createElement("input");
nombre.type = "text";
nombre.id = "nombre";
nombre.placeholder = "Nombre";
document.body.appendChild(nombre);

let apellido = document.createElement("input");
apellido.type = "text";
apellido.id = "apellido";
apellido.placeholder = "Apellido";
document.body.appendChild(apellido);

// Botones
let añadir = document.createElement("button");
añadir.type = "button";
añadir.id = "añadir";
añadir.textContent = "Añadir";
document.body.appendChild(añadir);

let eliminar = document.createElement("button");
eliminar.type = "button";
eliminar.id = "eliminar";
eliminar.textContent = "Eliminar";
document.body.appendChild(eliminar);


// Tabla
let tabla = document.createElement("table");
tabla.id = "tabla";

// Cabeceras de la tabla
let fila = document.createElement("tr");
let encabezadoNombre = document.createElement("th");
encabezadoNombre.textContent = "Nombre";
let encabezadoApellido = document.createElement("th");
encabezadoApellido.textContent = "Apellido";
fila.appendChild(encabezadoNombre);
fila.appendChild(encabezadoApellido);
tabla.appendChild(fila);
document.body.appendChild(tabla);

// Funcionalidad del botón Añadir
let botonAñadir = document.getElementById("añadir");
botonAñadir.addEventListener("click", function () {
    // Comprobación de que los campos no están vacíos. Si están vacios, se indica un aviso
    if (nombre.value === "" || apellido.value === "") {
        avisos.textContent = "Por favor, indica nombre y apellido.";
        return;
    }
    // Comprobación de si la persona ya está en la tabla
    for (let i = 1; i < tabla.rows.length; i++) {
        let fila = tabla.rows[i];
        let celdaNombre = fila.cells[0];
        let celdaApellido = fila.cells[1];
        if (celdaNombre.textContent === nombre.value &&
            celdaApellido.textContent === apellido.value) {
            avisos.textContent = "La persona ya existe.";
            return;
        }
    }
    // Añadir a la persona a la tabla y se elimina el contenido de aviso si existe
    let nuevoNombre = document.createElement("td");
    nuevoNombre.textContent = nombre.value;
    let nuevoApellido = document.createElement("td");
    nuevoApellido.textContent = apellido.value;
    let fila = document.createElement("tr");
    fila.appendChild(nuevoNombre);
    fila.appendChild(nuevoApellido);
    tabla.appendChild(fila);
    nombre.value = "";
    apellido.value = "";
    avisos.textContent = "";
});

// Funcionalidad del botón Eliminar
let botonEliminar = document.getElementById("eliminar");
botonEliminar.addEventListener("click", function () {
    // Comprobación de que los campos no están vacíos. Si están vacios, se indica un aviso
    if (nombre.value === "" || apellido.value === "") {
        avisos.textContent = "Por favor, indica nombre y apellido.";
        return;
    } else {
        // Bucle para recorrer la tabla y buscar si coincide alguna persona de la tabla con los datos indicados.
        let encontrado = false;
        for (let i = 1; i < tabla.rows.length; i++) {
            let fila = tabla.rows[i];
            let celdaNombre = fila.cells[0];
            let celdaApellido = fila.cells[1];
            // Si se encuentra, se elimina a la persona y se elimina el contenido de aviso si existe
            if (celdaNombre.textContent === nombre.value && celdaApellido.textContent === apellido.value) {
                tabla.deleteRow(i);
                encontrado = true;
                nombre.value = "";
                apellido.value = "";
                avisos.textContent = "";
                break;
            }
        }
        // Si no se encuentra, se indica un aviso
        if (!encontrado) {
            avisos.textContent = "No se encontró a la persona indicada.";
        }
    }
});