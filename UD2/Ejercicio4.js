    let suma100 = 0;
    let contador = 0;
function calcularSum100() {
    const numero = parseInt(document.getElementById("numeros").value);
    document.getElementById("numeros").value = "";
    suma100 += numero;
    contador++;
   if (suma100<= 100) {        
        document.getElementById("calculoSum100").innerHTML = "Introduce otro número.";
    } else {
    document.getElementById("calculoSum100").innerHTML = "Se han introduido " +contador+ " números y la suma de ellos es "+ suma100;
    suma100=0;
    contador=0;
    }
}