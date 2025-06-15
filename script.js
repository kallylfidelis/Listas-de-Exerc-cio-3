var precoLitro = document.querySelector("#precoLitro");
var valorPagamento = document.querySelector("#valorPagamento");
var btCalcular = document.querySelector("#btCalcular");
var h3Resultado = document.querySelector("#h3Resultado");

function calcularLitros() {
    var litros = Number(valorPagamento.value) / Number(precoLitro.value);
    h3Resultado.innerHTML = `Você conseguiu colocar ${litros.toFixed(2)} litros de gasolina.`;
}

btCalcular.onclick = function() {
    calcularLitros();
}
