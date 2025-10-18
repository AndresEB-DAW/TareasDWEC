function calcularSum() {
    const numeroCad = document.getElementById("numero").value;
    const numero = parseInt(numeroCad);
    if ( isNaN(numero) ) {
        document.getElementById("calculoSum").innerHTML = "Error: introduce un número válido.";
    } else {
        let i=numero;
        let suma=0;
        while (i>=1) {
            suma = suma + i;
            i= --i;
        }
        document.getElementById("calculoSum").innerHTML = "La suma de los números del 1 al " + numero + " es " + suma;
    }
}