function comprimir() {
    let cadena = document.getElementById("cadena").value;
    let long = cadena.length;
    let pos=0;
    let cont=1;
    let letra = cadena.charAt(0);
    let resultadoFinal = "";
    if (isNaN(cadena)) {
        while (pos < long) {
            letra = cadena.charAt(pos);
            if (letra == " ") {
                resultado = "?";
                resultadoFinal += resultado;
                pos++;
            } else if(letra == cadena.charAt(pos + 1)) {
                pos++;
                cont++;
            } else if (letra != cadena.charAt(pos + 1)) {
                    if (cont>1) {
                        resultado = cont+letra;
                    } else {
                        resultado = letra;
                    }   
                resultadoFinal += resultado;
                pos++;
                cont=1;
            }
        }
        document.getElementById("codificacion").innerHTML = "Codificación: " + resultadoFinal;
    } else {
            document.getElementById("codificacion").innerHTML = "Es un numero";
        }
}

function descomprimir() {
    let cadena = document.getElementById("cadena").value;
    let long = cadena.length;
    let pos=0;
    let char = cadena.charAt(0);
    let resultadoFinal = "";
    if (isNaN(cadena)) {
        while (pos < long) {
            char = cadena.charAt(pos);
            if (char == "?") {
                resultado = " ";
                resultadoFinal += resultado;
                pos++;
            } else if(isNaN(char)) {
                resultado = char;
                resultadoFinal += resultado;
                pos++;                
                } else {
                    let cantidad = Number(char);
                    let letra = cadena.charAt(pos + 1);
                    resultado = letra.repeat(cantidad);
                    resultadoFinal += resultado;
                    pos= pos+2;
                }
        }
        document.getElementById("codificacion").innerHTML = "Decodificación: " + resultadoFinal;
    } else {
            document.getElementById("codificacion").innerHTML = "Es un numero";
        }
}