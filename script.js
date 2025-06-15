var quantidadeCavalos = document.querySelector("#quantidadeCavalos");
var btCalcular = document.querySelector("#btCalcular");
var h3Resultado = document.querySelector("#h3Resultado");

function calcularFerraduras() {
    var ferraduras = Number(quantidadeCavalos.value) * 4;
    h3Resultado.innerHTML = `Serão necessárias ${ferraduras} ferraduras.`;
}

btCalcular.onclick = function() {
    calcularFerraduras();
}
