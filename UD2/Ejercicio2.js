function calcular() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const num3 = Number(document.getElementById("num3").value);
    let menor;
    let numMenor;  
    
    if (num1 > num2) {
        menor = num2;  
    } else {
        menor = num1;
    }
    if (menor > num3) {
        numMenor = num3;
    }   else { 
        numMenor = menor;
    }
    document.getElementById("calculo").innerHTML = "El número menor es " + numMenor;
}