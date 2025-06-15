const inputRaio = document.querySelector("#raio");
const btCalcular = document.querySelector("#btCalcular");
const resultado = document.querySelector("#h3Resultado");

function calcularAreaPizza() {
  const raio = Number(inputRaio.value);
  if (raio <= 0 || isNaN(raio)) {
    resultado.textContent = "Por favor, insira um valor válido para o raio.";
    return;
  }
  const pi = 3.14;
  const area = pi * raio * raio;
  resultado.textContent = `A área da pizza é ${area.toFixed(2)} cm².`;
}

btCalcular.onclick = calcularAreaPizza;
