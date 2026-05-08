
let cotacaoAtual = 0;


async function buscarDolar() {
  const url = 'https://economia.awesomeapi.com.br/json/last/USD-BRL';

  const resposta = await fetch(url);
  const dados = await resposta.json();

  cotacaoAtual = parseFloat(dados.USDBRL.bid);

  document.getElementById('cotacao').innerHTML =
    `Cotação atual: R$ ${cotacaoAtual.toFixed(2)}`;
}

function converterParaDolar() {
  const real = document.getElementById('real').value;

  const resultado = real / cotacaoAtual;

  document.getElementById('resultadoConversao').innerHTML =
    `US$ ${resultado.toFixed(2)}`;
}

function converterParaReal() {
  const dolar = document.getElementById('dolar').value;

  const resultado = dolar * cotacaoAtual;

  document.getElementById('resultadoConversao').innerHTML =
    `R$ ${resultado.toFixed(2)}`;
}

async function buscarPais() {
  const pais = document.getElementById('pais').value;

  const url = `https://restcountries.com/v3.1/name/${pais}`;

  const resposta = await fetch(url);
  const dados = await resposta.json();

  const info = dados[0];

  document.getElementById('dadosPais').innerHTML = `
    <h3>${info.name.common}</h3>
    <img src="${info.flags.png}" width="150">
    <p>Capital: ${info.capital}</p>
    <p>População: ${info.population}</p>
  `;
}


async function buscarCachorro() {
  const url = 'https://dog.ceo/api/breeds/image/random';

  const resposta = await fetch(url);
  const dados = await resposta.json();

  document.getElementById('imagemDog').src = dados.message;
}

async function buscarClima() {

  const cidade = document.getElementById('cidade').value;
  const apiKey = 'SUA_CHAVE_AQUI';

  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt_br&units=metric`;

  const resposta = await fetch(url);
  const dados = await resposta.json();

  document.getElementById('clima').innerHTML = `
    <h3>${dados.name}</h3>
    <p>Temperatura: ${dados.main.temp}°C</p>
    <p>Clima: ${dados.weather[0].description}</p>
    <p>Umidade: ${dados.main.humidity}%</p>
  `;
}