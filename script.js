var quantidadePequena = document.querySelector("#quantidadePequena");
var quantidadeMedia = document.querySelector("#quantidadeMedia");
var quantidadeGrande = document.querySelector("#quantidadeGrande");
var btCalcular = document.querySelector("#btCalcular");
var h3Resultado = document.querySelector("#h3Resultado");

function calcularTotal() {
    var total = (Number(quantidadePequena.value) * 10) +
                (Number(quantidadeMedia.value) * 12) +
                (Number(quantidadeGrande.value) * 15);
    h3Resultado.innerHTML = `Total arrecadado: R$ ${total.toFixed(2)}`;
}

btCalcular.onclick = function() {
    calcularTotal();
}
