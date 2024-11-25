function calcularFatorial() {
    const inputNumero = document.getElementById("numero").value;
    const resultadoDiv = document.getElementById("resultado");
    const numero = parseInt(inputNumero);

    // Validação do número inserido
    if (isNaN(numero) || numero < 1 || numero > 30) {
        resultadoDiv.style.color = "rgb(38, 0, 144)";
        resultadoDiv.innerText = "Por favor, insira um número válido entre 1 e 30.";
        return;
    }

    let fatorial = 1; // Variável para armazenar o resultado
    let contador = numero; // Começa no número fornecido

    // Loop while para calcular o fatorial
    while (contador > 1) {
        fatorial *= contador; // Multiplica o valor atual do contador
        contador--; // Decrementa o contador
    }

    // Exibição do resultado
    resultadoDiv.style.color = "rgb(38, 0, 144)";
    resultadoDiv.innerText = `O fatorial de ${numero} é: ${fatorial}`;
}