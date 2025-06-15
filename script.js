var peso = document.querySelector("#peso");
var btCalcular = document.querySelector("#btCalcular");
var h3Resultado = document.querySelector("#h3Resultado");

function calcularValor() {
    var valor = Number(peso.value) * 12;
    h3Resultado.innerHTML = `Valor a pagar: R$ ${valor.toFixed(2)}`;
}

btCalcular.onclick = function() {
    calcularValor();
}
