let arrayInsert = []

// Função para gerar número aleatório
function gerarAleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// Função para gerar o array aleatório
function gerarInsert() {
    let res6 = document.getElementById('res6')
    arrayInsert = []

    for (let i = 0; i < 5; i++) {
        arrayInsert.push(gerarAleatorio(10, 1))
    }

    res6.innerHTML = 'Array Original: ' + arrayInsert.join(', ') + '<br>'
}

// Função para ordenar o array com Insertion Sort
function ordenarInsert() {
    let res6 = document.getElementById('res6')
    let cont = 0
    res6.innerHTML = 'Array Original: ' + arrayInsert.join(', ') + '<br>'
    res6.innerHTML += 'Ordenação com InsertSort: <br>'

    for (let i = 1; i < arrayInsert.length; i++) {
        let guard = arrayInsert[i]
        let j = i - 1

        while (j >= 0 && arrayInsert[j] > guard) {
            arrayInsert[j + 1] = arrayInsert[j]
            j--
            cont++
        }

        arrayInsert[j + 1] = guard
        res6.innerHTML += arrayInsert.join(', ') + '<br>'
    }
    res6.innerHTML += 'Voltas: ' + cont + '<br>'
}

// Função para inverter a ordem com Insertion Sort
function inverterInsert() {
    let res6 = document.getElementById('res6')
    let cont = 0
    res6.innerHTML = 'Array Original: ' + arrayInsert.join(', ') + '<br>'
    res6.innerHTML += 'Ordenação Inversa com InsertSort: <br>'

    for (let i = 1; i < arrayInsert.length; i++) {
        let guard = arrayInsert[i]
        let j = i - 1

        while (j >= 0 && arrayInsert[j] < guard) {
            arrayInsert[j + 1] = arrayInsert[j]
            j--
            cont++
        }

        arrayInsert[j + 1] = guard
        res6.innerHTML += arrayInsert.join(', ') + '<br>'
    }
    res6.innerHTML += 'Voltas: ' + cont + '<br>'
}