let lista_amigos = [];

function adicionarAmigo(){

    amigo = document.getElementById('amigo');
    
    // Verifica se amigo já está na lista
    if(lista_amigos.includes(amigo.value))
    {
        document.getElementById('messages').textContent = `${amigo.value} já encontra-se na lista.`;
        document.getElementById('messages').style.color = 'red';
    } else {
        
        lista_amigos.push(amigo.value);
        exibeAmigo(amigo.value);
    }

    // limpar o input
    document.querySelector('input').value = '';
    document.getElementById('sortear').removeAttribute('disabled');
    document.getElementById('sortear').removeAttribute('style');

}

function exibeAmigo(amigo) {

    const criaTag = document.createElement('li');
    criaTag.textContent = amigo;

    const lista = document.getElementById('listaAmigos');
    lista.appendChild(criaTag);

}

function sortearAmigo() {

    if(lista_amigos.length < 1) {

        document.getElementById('messages').textContent = `Nenhum amigo adicionado a lista, adicione primeiro.`;
        document.getElementById('messages').style.color = 'red';

    }
    else {
        let amigo_secreto = lista_amigos[parseInt(Math.random() * (lista_amigos.length - 1))];
        document.getElementById('messages').textContent = `O amigo escolhido foi: ${amigo_secreto}`;
        document.getElementById('messages').style.color = 'green';

        // desabilitar o botão sortear amigo após o sorteio
        document.getElementById('sortear').setAttribute('disabled', true);
        document.getElementById('sortear').setAttribute('style', 'background-color: #999 !important;');
    }
}

function limparDados() {
    lista_amigos = [];
    document.getElementById('sortear').removeAttribute('disabled');
    document.getElementById('sortear').removeAttribute('style');
    
    // removendo a lista de amigos da tag ul
    const list = document.getElementById("listaAmigos");

    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
}

