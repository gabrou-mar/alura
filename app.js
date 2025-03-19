let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nome = inputAmigo.value.trim();
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }
    amigos.push(nome);
    atualizarLista();
    inputAmigo.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para realizar o sorteio.");
        return;
    }
    
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    
    exibirResultado(sorteado);
}

function exibirResultado(sorteado) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    const li = document.createElement("li");
    li.textContent = `O amigo secreto sorteado é: ${sorteado}`;
    resultado.appendChild(li);
}
