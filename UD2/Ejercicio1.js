function saludar() {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    if (edad >= 18) {
        mayorMenor = "mayor";  
    } else {
        mayorMenor = "menor";
    }
    document.getElementById("saludo").innerHTML = "Hola " + nombre + ", tienes " + edad+ " años y eres " + mayorMenor+ " de edad.";
}