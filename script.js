var numero = document.querySelector("#numero");
var btCalcular = document.querySelector("#btCalcular");
var h3Resultado = document.querySelector("#h3Resultado");

function calcularCentenas() {
    var centena = Math.floor(Number(numero.value) / 100);
    var dezena = Math.floor((Number(numero.value) % 100) / 10);
    var unidade = Number(numero.value) % 10;

    h3Resultado.innerHTML = `CENTENA = ${centena} <br> DEZENA = ${dezena} <br> UNIDADE = ${unidade}`;
}

btCalcular.onclick = function() {
    calcularCentenas();
}
