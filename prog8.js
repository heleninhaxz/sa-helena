let pilha = [];

// Função para gerar números aleatórios dentro de um intervalo
function setValueRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Função para gerar a pilha com números aleatórios
function gerarPilha() {
    pilha = [];  // Limpar a pilha antes de gerar nova
    for (let i = 0; i < 5; i++) {
        pilha.push(setValueRandom(1, 100));  // Adiciona número aleatório entre 1 e 100
    }
    console.log(pilha);
    exibirPilha();
}

// Função para remover os elementos da pilha
function removerPilha() {
    for (let i = 0; i < 5; i++) {
        pilha.pop();  // Remove um elemento por vez
        console.log(pilha);
    }
    exibirPilha();
}

// Função para exibir a pilha atual na tela
function exibirPilha() {
    const outputDiv = document.getElementById('pilhaOutput');
    outputDiv.innerHTML = `<span>Pilha Atual: [${pilha.join(', ')}]</span>`;
}