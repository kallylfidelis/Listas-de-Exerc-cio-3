var quantidadePao = document.querySelector("#quantidadePao");
var quantidadeBroa = document.querySelector("#quantidadeBroa");
var btCalcular = document.querySelector("#btCalcular");
var h3Resultado = document.querySelector("#h3Resultado");

function calcularVendas() {
    var totalPao = Number(quantidadePao.value) * 0.12;
    var totalBroa = Number(quantidadeBroa.value) * 1.50;
    var totalArrecadado = totalPao + totalBroa;
    var poupanca = totalArrecadado * 0.10;
    
    h3Resultado.innerHTML = `Total arrecadado: R$ ${totalArrecadado.toFixed(2)}<br>Guardar na poupança: R$ ${poupanca.toFixed(2)}`;
}

btCalcular.onclick = function() {
    calcularVendas();
}
