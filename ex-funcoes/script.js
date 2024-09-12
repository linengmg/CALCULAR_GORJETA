const calcularGorjeta = (valorConta, avaliarServico, callback) => {
  return callback(valorConta);
};

const bomServico = (valorConta) => valorConta * 0.2;
const servicoRegular = (valorConta) => valorConta * 0.1;
const ruimServico = (valorConta) => valorConta * 0.05;

document.getElementById('calcularBtn').addEventListener('click', () => {
  const totalConta = parseFloat(document.getElementById('totalConta').value);
  const avaliarServico = document.getElementById('avaliarServico').value;
  let gorjeta = 0;

  if (!isNaN(totalConta) && totalConta > 0) {
    if (avaliarServico === 'bom') {
      gorjeta = calcularGorjeta(totalConta, avaliarServico, bomServico);
    } else if (avaliarServico === 'regular') {
      gorjeta = calcularGorjeta(totalConta, avaliarServico, servicoRegular);
    } else if (avaliarServico === 'ruim') {
      gorjeta = calcularGorjeta(totalConta, avaliarServico, ruimServico);
    }

    document.getElementById(
      'resultado',
    ).innerHTML = `A gorjeta é: R$ ${gorjeta.toFixed(2)}. Valor total: R$ ${(
      totalConta + gorjeta
    ).toFixed(2)}`;
  } else {
    document.getElementById('resultado').innerHTML =
      'Por favor, insira um valor válido.';
  }
});
