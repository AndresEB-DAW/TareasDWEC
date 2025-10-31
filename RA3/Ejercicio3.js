function acumular() {
    let max = Number.MAX_VALUE;
    localStorage.clickcount = Number(localStorage.clickcount) || 0;
    document.getElementById("acumulado").innerHTML = localStorage.clickcount;
    if (Number(localStorage.clickcount) < max){
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
        document.getElementById("acumulado").innerHTML = localStorage.clickcount;
    } else {
        document.getElementById("acumulado").innerHTML = "Ya no se pueden realizar más clicks";
    }
}
/*
function restablecer() {
    localStorage.clickcount = 0;
    document.getElementById("acumulado").innerHTML = localStorage.clickcount;
}
*/