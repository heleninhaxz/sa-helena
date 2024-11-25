let arraySelection = []

// Função para gerar número aleatório
function gerarAleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// Função para gerar o array aleatório
function gerarSelection() {
    let res = document.getElementById('res')
    arraySelection = []

    for (let i = 0; i < 5; i++) {
        arraySelection.push(gerarAleatorio(10, 1))
    }

    res.innerHTML = 'Array Original: ' + arraySelection.join(', ') + '<br>'
}

// Função para ordenar o array com Selection Sort
function ordenarSelection() {
    let res = document.getElementById('res')
    let cont = 0
    res.innerHTML = 'Array Original: ' + arraySelection.join(', ') + '<br>'
    res.innerHTML += 'Ordenação com SelectionSort: <br>'

    for (let i = 0; i < arraySelection.length; i++) {
        let menor = i
        for (let j = i + 1; j < arraySelection.length; j++) {
            if (arraySelection[j] < arraySelection[menor]) {
                menor = j
            }
            cont++
        }
        if (i != menor) {
            let guard = arraySelection[i]
            arraySelection[i] = arraySelection[menor]
            arraySelection[menor] = guard
        }
        res.innerHTML += arraySelection.join(', ') + '<br>'
    }
    res.innerHTML += 'Voltas: ' + cont + '<br>'
}

// Função para inverter a ordem com Selection Sort
function inverterSelection() {
    let res = document.getElementById('res')
    let cont = 0
    res.innerHTML = 'Array Original: ' + arraySelection.join(', ') + '<br>'
    res.innerHTML += 'Ordenação Inversa com SelectionSort: <br>'

    for (let i = 0; i < arraySelection.length; i++) {
        let maior = i
        for (let j = i + 1; j < arraySelection.length; j++) {
            if (arraySelection[j] > arraySelection[maior]) {
                maior = j
            }
            cont++
        }
        if (i != maior) {
            let guard = arraySelection[i]
            arraySelection[i] = arraySelection[maior]
            arraySelection[maior] = guard
        }
        res.innerHTML += arraySelection.join(', ') + '<br>'
    }
    res.innerHTML += 'Voltas: ' + cont + '<br>'
}