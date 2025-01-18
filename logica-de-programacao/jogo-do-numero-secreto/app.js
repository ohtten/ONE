let listaDeNumerosSorteados = [];
const qtdeNumeros = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;

function exibirTextoNaTela(tag, texto) {

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial() {

    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${qtdeNumeros}`);
}

mensagemInicial();

function verificarChute() {
   
    let chute = document.querySelector('input').value;
    tentativas++;

    if (chute == numeroSecreto) {
        
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('p', `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else {
        
        if (chute > numeroSecreto) {
           
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
        
        } else {
        
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
        }

        limparCampo();
    }

}

function gerarNumeroAleatorio() {

    let numeroEscolhido = parseInt(Math.random() * qtdeNumeros + 1);
    let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;
    
    if(quantidadeDeElementosDaLista == qtdeNumeros) {
       
        listaDeNumerosSorteados = [];
    }
    
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
       
        return gerarNumeroAleatorio();
    
    } else {
       
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }

}

function limparCampo() {

    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {

    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 0;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}

