let res2 = document.getElementById('res2');
let passos2 = document.getElementById('passos2');
let array2 = [5, 3, 1, 4, 2];

// Ordenação Crescente
function ordenarCrescente2() {
    let aux;
    for (let j = 0; j < array2.length - 1; j++) {
        for (let i = 0; i < array2.length - 1; i++) {
            if (array2[i] > array2[i + 1]) {
                aux = array2[i];
                array2[i] = array2[i + 1];
                array2[i + 1] = aux;

                passos2.innerHTML += `Passo ${j + 1}: ${array2.join(', ')}\n`;
            }
        }
    }
    res2.innerHTML += `Array ordenado (crescente): ${array2.join(', ')}`;
}

// Ordenação Decrescente
function ordenarDecrescente2() {
    let aux;
    for (let j = array2.length - 1; j > 0; j--) {
        for (let i = 0; i < array2.length - 1; i++) {
            if (array2[i] < array2[i + 1]) {
                aux = array2[i];
                array2[i] = array2[i + 1];
                array2[i + 1] = aux;

                passos2.innerHTML += `Passo ${j + 1}: ${array2.join(', ')}\n`;
            }
        }
    }
    res2.innerHTML += `Array ordenado (decrescente): ${array2.join(', ')}`;
}

function chamada2Crescente() {
    res2.innerHTML = `Array original: ${array2.join(', ')}\n`;
    passos2.innerHTML = ''; 
    ordenarCrescente2();
}

function chamada2Decrescente() {
    res2.innerHTML = `Array original: ${array2.join(', ')}\n`;
    passos2.innerHTML = ''; 
    ordenarDecrescente2();
}