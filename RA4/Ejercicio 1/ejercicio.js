let articulos = [
  { "codigo": 1, "descripcion": "mouse Inalámbrico", "precio": 25.99, "tipo": "Periféricos" },
  { "codigo": 2, "descripcion": "teclado Mecánico", "precio": 49.99, "tipo": "Periféricos" },
  { "codigo": 3, "descripcion": "Monitor 24 pulgadas", "precio": 179.99, "tipo": "Electrónica" },
  { "codigo": 4, "descripcion": "Disco duro externo 1TB", "precio": 89.99, "tipo": "Electrónica" },
  { "codigo": 5, "descripcion": "Auriculares con micrófono", "precio": 34.99, "tipo": "Periféricos" },
  { "codigo": 6, "descripcion": "Cable HDMI 2m", "precio": 12.99, "tipo": "Accesorios" },
  { "codigo": 7, "descripcion": "Cargador USB-C", "precio": 19.99, "tipo": "Accesorios" },
  { "codigo": 8, "descripcion": "lámpara LED de escritorio", "precio": 29.99, "tipo": "Mobiliario" },
  { "codigo": 9, "descripcion": "Silla ergonómica", "precio": 199.99, "tipo": "Mobiliario" },
  { "codigo": 10, "descripcion": "webcam Full HD", "precio": 69.99, "tipo": "Electrónica" },
  { "codigo": 11, "descripcion": "Tarjeta de memoria 128GB", "precio": 24.99, "tipo": "Accesorios" },
  { "codigo": 12, "descripcion": "Base para laptop ajustable", "precio": 39.99, "tipo": "Mobiliario" },
  { "codigo": 13, "descripcion": "Router WiFi 6", "precio": 129.99, "tipo": "Electrónica" },
  { "codigo": 14, "descripcion": "Impresora multifuncional", "precio": 249.99, "tipo": "Electrónica" },
  { "codigo": 15, "descripcion": "smartwatch deportivo", "precio": 59.99, "tipo": "Electrónica" },
  { "codigo": 16, "descripcion": "Cámara de seguridad inalámbrica", "precio": 99.99, "tipo": "Electrónica" },
  { "codigo": 17, "descripcion": "Micrófono de condensador", "precio": 74.99, "tipo": "Periféricos" },
  { "codigo": 18, "descripcion": "Controlador MIDI", "precio": 119.99, "tipo": "Periféricos" },
  { "codigo": 19, "descripcion": "altavoz Bluetooth Portátil", "precio": 45.99, "tipo": "Electrónica" },
  { "codigo": 20, "descripcion": "Kit de herramientas para PC", "precio": 18.99, "tipo": "Accesorios" }
]
/* Apartado 1
 Escribe una función que reciba como parámetro el array de artículos, un tipo de artículo (por ejemplo, "Electrónica") 
 y un precio máximo. La función debe devolver un array con todos los artículos que pertenezcan a ese tipo y 
 tengan un precio menor o igual al especificado. */
function apartado1(articulos, tipo, precioMaximo) {
  return articulos.filter(articulos => articulos.tipo.toLowerCase() === tipo.toLowerCase() && articulos.precio <= precioMaximo);
}
console.log(apartado1(articulos, "electrónica", 100));

/* Apartado 2
 Escribe una función que reciba como parámetro el array de artículos y modifique las descripciones de los artículos para que 
 todas las descripciones comiencen con mayúsculas y el resto de las letras estén en minúsculas. 
 La función debe devolver el array modificado. */
function apartado2(articulos) {
  articulos.forEach(articulo => articulo.descripcion = articulo.descripcion[0].toUpperCase() + articulo.descripcion.slice(1).toLowerCase());
}
apartado2(articulos);
console.log(articulos);

/* Apartado 3
 Escribe una función que reciba como parámetro el array de artículos y una cadena. 
 La función debe devolver un array con los artículos que tienen esa cadena en la descripción. */
function apartado3(articulos, cadena) {
  return articulos.filter(articulos => articulos.descripcion.toLowerCase().includes(cadena.toLowerCase()));
}
console.log(apartado3(articulos, "micrófono"));

/* Apartado 4
 Escribe una función que recibe como parámetro el array y un tipo de artículo, y devuelve un objeto con dos atributos; 
 cantidad y precio medio. que contendrán la cantidad y el precio medio de los artículos de ese tipo.
 Ejemplo de parámetro: "Electrónica"
 Ejemplo de salida: { "cantidad": 8, "preciomedio": 113.74 } */
function apartado4(articulos, tipo) {
  let cantidad = 0;
  let precioTotal = 0;
  articulos.forEach(articulo => {
    if (articulo.tipo.toLowerCase() === tipo.toLowerCase()) {
      cantidad++;
      precioTotal += articulo.precio;
    }
  });
  let preciomedio = precioTotal / cantidad;
  return { cantidad: cantidad, preciomedio: Number(preciomedio.toFixed(2)) };
}
console.log(apartado4(articulos, "electrónica"));

/* Apartado 5
 Escribe una función que reorganice el array de artículos según el precio, 
 en orden ascendente o descendente (según un parámetro de entrada). */
function apartado5(articulos, orden) {
  if (orden === "ascendente") {
    articulos.sort((a, b) => a.precio - b.precio);
  } else if (orden === "descendente") {
    articulos.sort((a, b) => b.precio - a.precio);
  } else {
    articulos.sort((a, b) => a.precio - b.precio);
    console.log("Orden no válido: debe ser \"ascendente\" o \"descendente\".\n Por defecto se muestra en orden ascendente.");
  }
  return articulos;
}
console.log(apartado5(articulos, "descendente"));