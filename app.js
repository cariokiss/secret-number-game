const numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    const campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto')
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10')

function verificarChute() {
    const chute = document.querySelector('input').value;
    console.log(chute === numeroSecreto)
}

function gerarNumeroAleatorio () {
    return Number.parseInt(Math.random() * 10 + 1);
}