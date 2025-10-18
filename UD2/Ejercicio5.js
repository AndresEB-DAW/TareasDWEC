const mostrarTabla = (event) => {
    event.preventDefault();
    let numTablas = Number(document.getElementById('numTablas').value);
    let totalTablas = "";
    if (numTablas > 0 && numTablas <= 10){
        while (numTablas>0) {
            let tabla = document.getElementById('tabla');
            let tablaMultiplicar = `<h2>Tabla de multiplicar del número ${numTablas}</h2>`;
            tablaMultiplicar += '<ul>';
        for (let i = 0; i <= 10; i++) {
            tablaMultiplicar += `<li>${numTablas} * ${i} = ${numTablas * i}</li>`;
        }
            tablaMultiplicar += '</ul>';
            totalTablas += tablaMultiplicar; 
            tabla.innerHTML = totalTablas;
        numTablas--;
        }
    } else {
    alert('El número introducido debe estar entre 1 y 10 (ambos inclusive)');
    document.getElementById("numTablas").value = '';
  }
}