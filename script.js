var salario = document.querySelector("#salario");
var btCalcular = document.querySelector("#btCalcular");
var h3Resultado = document.querySelector("#h3Resultado");

function calcularSalario() {
    var aumento = Number(salario.value) * 0.15;
    var salarioComAumento = Number(salario.value) + aumento;
    var imposto = salarioComAumento * 0.08;
    var salarioFinal = salarioComAumento - imposto;

    h3Resultado.innerHTML = `
        Salário Inicial: R$ ${Number(salario.value).toFixed(2)}<br>
        Salário com Aumento: R$ ${salarioComAumento.toFixed(2)}<br>
        Salário Final: R$ ${salarioFinal.toFixed(2)}
    `;
}

btCalcular.onclick = function() {
    calcularSalario();
}
