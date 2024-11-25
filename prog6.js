function criarTabela(titulo, matriz) {
    // Cria título e tabela HTML
    const container = document.createElement('div');
    const header = document.createElement('h2');
    header.textContent = titulo;

    const table = document.createElement('table');
    matriz.forEach((linha) => {
        const row = document.createElement('tr');
        linha.forEach((celula) => {
            const cell = document.createElement('td');
            cell.textContent = celula;
            row.appendChild(cell);
        });
        table.appendChild(row);
    });

    container.appendChild(header);
    container.appendChild(table);
    document.getElementById('output').appendChild(container);
}

function gerarMatrizSecundaria() {
    // Cria matriz diagonal secundária
    let matriz = Array.from({ length: 7 }, () => Array(7).fill(0));
    for (let i = 0; i < 7; i++) {
        matriz[i][6 - i] = 5; // Preenche a diagonal secundária
    }
    return matriz;
}

function gerarMatrizPrincipal() {
    // Cria matriz diagonal principal
    let matriz = Array.from({ length: 7 }, () => Array(7).fill(0));
    for (let i = 0; i < 7; i++) {
        matriz[i][i] = 7; // Preenche a diagonal principal
    }
    return matriz;
}

function somarMatrizes(matriz1, matriz2) {
    // Soma duas matrizes
    let matrizSoma = Array.from({ length: 7 }, () => Array(7).fill(0));
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            matrizSoma[i][j] = matriz1[i][j] + matriz2[i][j];
        }
    }
    return matrizSoma;
}

function executar() {
    // Limpa o conteúdo anterior
    document.getElementById('output').innerHTML = "";

    // Gera as matrizes
    const matrizSecundaria = gerarMatrizSecundaria();
    const matrizPrincipal = gerarMatrizPrincipal();
    const matrizSoma = somarMatrizes(matrizSecundaria, matrizPrincipal);

    // Exibe as matrizes
    criarTabela("Matriz Diagonal Secundária (5)", matrizSecundaria);
    criarTabela("Matriz Diagonal Principal (7)", matrizPrincipal);
    criarTabela("Matriz Soma", matrizSoma);
}