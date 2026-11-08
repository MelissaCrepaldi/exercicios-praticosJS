alert('Melissa, suicidio é a opção');
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

    if (nome.value === 'Melissa') {
        alert('Melissa, suicidio é a opção');
        nomeResultado.textContent = `Melissa, elimine yourself`;
    }

    if (nome.value === 'suicidio') {
        alert('sim, eu, suicidio sou a opção');
         nomeResultado.textContent = `escolha como se matar`;
    }

    if (nome.value === 'Anderson') {
        alert('pq vc tem o msm nome do amor da minha vida?');
         nomeResultado.textContent = `fica entre nós, eu amo MUUUUUUUUITO ele <3, palavras jamais vão expressar o quanto eu amo ele, mas eu amo ele, e se ele ler isso, eu te amo amor da minha vida <3 `;
    }
}

somar.addEventListener('click', somarNumeros)

function somarNumeros() {
    let soma = Number(num1Soma.value) + Number(num2Soma.value);
    resultadoSoma.textContent = `O resultado da soma é: ${soma}`;

    if (soma == 67) {
        alert('SIX SEVEEEEEEEEEEN');
        resultadoSoma.textContent = `O resultado da soma é SIIIIX SEEEEVEEEEEN >:D (rir para nao chorar)`;
    }
}

subtrair.addEventListener('click', subtrairNumeros);

function subtrairNumeros() {
    let subtracao = Number(num1Sub.value) - Number(num2Sub.value);
    resultadoSub.textContent = `O resultado da subtração é: ${subtracao}`;

    if (subtracao == 67) {
        alert('SIX SEVEEEEEEEEEEN');
        resultadoSub.textContent = `O resultado da subtração é SIIIIX SEEEEVEEEEEN >:D`;
    }
}