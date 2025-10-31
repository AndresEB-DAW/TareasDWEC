function calcularFecha() {
    let boton = document.getElementById("boton");

    boton.addEventListener('click', () => {
        const dia = new Date();
        const diaString = (dia.getDate() + "/" + (dia.getMonth() + 1) + "/" + dia.getFullYear());
        const finAnio = new Date(dia.getFullYear(), 11, 31);
        const diasRestantes = Math.ceil((finAnio - dia) / (1000 * 60 * 60 * 24));
        const fecha = "Hoy es " + diaString + " y faltan " + diasRestantes + " días para fin de año.";
        const subVentana = window.open("", "Fecha", "height=800, width=600");
  
        subVentana.document.write(`
            <html>
            <head>
                <title>Fecha actual</title>
            </head>
            <body>
                <p>${fecha}</p>
            </body>
            </html>
      `);
    });
}
calcularFecha();