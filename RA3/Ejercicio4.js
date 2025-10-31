function abrirVentana() {
    let boton = document.getElementById("boton2");

     boton.addEventListener('click', () => {
        const subVentana = window.open("", "Temporizador", "height=800, width=600");
  
        subVentana.document.write(`
            <html>
            <head>
                <title>Temporizador</title>
            </head>
            <body>
                <script>
                    setTimeout(() => {
                        window.location.href = "https://cifpcarlos3.es/es";
                    }, 3000);
                </script>
                <p>Esta ventana le rediccionará en 3 segundos</p>
            </body>
            </html>
      `);
    });
}
abrirVentana();