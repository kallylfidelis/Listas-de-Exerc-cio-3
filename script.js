var dias = document.querySelector("#dias");
var btCalcular = document.querySelector("#btCalcular");
var h3Resultado = document.querySelector("#h3Resultado");

function calcularTempo() {
    var anos = Math.floor(Number(dias.value) / 360);
    var meses = Math.floor((Number(dias.value) % 360) / 30);
    var diasRestantes = Number(dias.value) % 30;
    
    h3Resultado.innerHTML = `Tempo de trabalho: ${anos} anos, ${meses} meses e ${diasRestantes} dias.`;
}

btCalcular.onclick = function() {
    calcularTempo();
}
