var nome = document.querySelector("#nome");
var idade = document.querySelector("#idade");
var btCalcular = document.querySelector("#btCalcular");
var h3Resultado = document.querySelector("#h3Resultado");

function calcularDiasDeVida() {
    var diasDeVida = Number(idade.value) * 365;
    h3Resultado.innerHTML = `${nome.value.toUpperCase()}, VOCÊ JÁ VIVEU ${diasDeVida} DIAS.`;
}

btCalcular.onclick = function() {
    calcularDiasDeVida();
}
