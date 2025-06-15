var x1 = document.querySelector("#x1");
var y1 = document.querySelector("#y1");
var x2 = document.querySelector("#x2");
var y2 = document.querySelector("#y2");
var btCalcular = document.querySelector("#btCalcular");
var h3Resultado = document.querySelector("#h3Resultado");

function calcularDistancia() {
    var distancia = Math.sqrt(Math.pow(Number(x2.value) - Number(x1.value), 2) + Math.pow(Number(y2.value) - Number(y1.value), 2));
    h3Resultado.innerHTML = `A distância entre os pontos é ${distancia.toFixed(2)} unidades.`;
}

btCalcular.onclick = function() {
    calcularDistancia();
}
