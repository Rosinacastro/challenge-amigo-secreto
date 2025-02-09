//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome) {
        amigos.push(nome);
        atualizarLista();
        input.value = '';
        input.focus();
    } else {
        alert('Digite um nome válido.');
    }
}

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.className = 'name-item';
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para realizar o sorteio.');
        return;
    }

    const sorteio = [...amigos];
    const resultado = [];

    for (let i = 0; i < amigos.length; i++) {
        const sorteado = sorteio.splice(Math.floor(Math.random() * sorteio.length), 1)[0];
        resultado.push(`${amigos[i]} tirou ${sorteado}`);
    }

    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = '';

    resultado.forEach((linha) => {
        const li = document.createElement('li');
        li.textContent = linha;
        li.className = 'result-item';
        listaResultado.appendChild(li);
    });
}


