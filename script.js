var dia = document.querySelector("#dia");
var mes = document.querySelector("#mes");
var btCalcular = document.querySelector("#btCalcular");
var h3Resultado = document.querySelector("#h3Resultado");

function calcularDias() {
    var diasPassados = (Number(mes.value) - 1) * 30 + Number(dia.value);
    h3Resultado.innerHTML = `Dias passados desde o início do ano: ${diasPassados}`;
}

btCalcular.onclick = function() {
    calcularDias();
}
