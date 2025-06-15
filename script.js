var largura = document.querySelector("#largura");
var comprimento = document.querySelector("#comprimento");
var btCalcular = document.querySelector("#btCalcular");
var h3Resultado = document.querySelector("#h3Resultado");

function calcularArea() {
    var area = Number(largura.value) * Number(comprimento.value);
    h3Resultado.innerHTML = `A área do terreno é ${area} m².`;
}

btCalcular.onclick = function() {
    calcularArea();
}
