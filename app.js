let amigos = [];

//função para adicionar amigos
function adicionarAmigo(){
    let entrada = document.getElementById('amigo');
    let nome = entrada.value.trim();

    //verificação do campo em branco 
    if (nome == ''){
        alert('Por favor digite um nome válido.');
        return;
    }

    //adicionando nome no array
    amigos.push(nome);

    //limpando o campo de entrada
    entrada.value = ' ';

    atualizarLista();
}

function atualizarLista(){
    let lista = document.getElementById('listaAmigos');

    //limpar lista
    lista.innerHTML = ' ';

    //percoorer a lista e adicionar nomes
    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length == 0){
        alert('Não tem amigos para sortear!');
        return;
    }

    //indice aleatorio 
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //obter nome sorteado
    let nomeSorteado = amigos[indiceAleatorio];

    //exibir resultado
    let  resultado = document.getElementById('resultado');
    resultado.innerHTML = 'O amigo sorteado foi '+ nomeSorteado;
}

