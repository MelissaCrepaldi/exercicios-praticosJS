alert('Veja os exercicios);
// nome
let nome = document.querySelector('#nome');
let botao = document.querySelector('#apresentar');
let nomeResultado = document.querySelector('#nome-mostrado');

// soma
let num1Soma = document.querySelector('#num1-soma');
let num2Soma = document.querySelector('#num2-soma');
let somar = document.querySelector('#somar');
let resultadoSoma = document.querySelector('#resultado-soma');

// subtração
let num1Sub = document.querySelector('#num1-sub');
let num2Sub = document.querySelector('#num2-sub');
let subtrair = document.querySelector('#subtrair');
let resultadoSub = document.querySelector('#resultado-subtracao');

botao.addEventListener('click', mostrarNome)

function mostrarNome() {
    nomeResultado.textContent = `Meu nome é ${nome.value}!`;
}

somar.addEventListener('click', somarNumeros)

function somarNumeros() {
    let soma = Number(num1Soma.value) + Number(num2Soma.value);
    resultadoSoma.textContent = `O resultado da soma é: ${soma}`;
}

subtrair.addEventListener('click', subtrairNumeros);

function subtrairNumeros() {
    let subtracao = Number(num1Sub.value) - Number(num2Sub.value);
    resultadoSub.textContent = `O resultado da subtração é: ${subtracao}`;
}
