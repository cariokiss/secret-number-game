const numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    const campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto')
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10')

function verificarChute() {
    const chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', 'Parabéns, você descobriu o número secreto!')
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor')
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior')
        }
    }
}

function gerarNumeroAleatorio () {
    return Number.parseInt(Math.random() * 10 + 1);
}