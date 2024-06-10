const numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoNaTela(tag, texto) {
    const campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto')
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10')

function verificarChute() {
    const chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        const palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        const mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativas);
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

function gerarNumeroAleatorio () {
    return Number.parseInt(Math.random() * 10 + 1);
}