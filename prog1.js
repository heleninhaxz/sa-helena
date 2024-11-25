let resposta = document.getElementById("resposta");
console.log(resposta);

function calcule(){
    let nome = document.getElementById("nome").value;
    let idade = Number(document.getElementById("idade").value);

    console.log(nome);
    console.log(idade);

    if (idade < 16){
        resposta.innerHTML = nome + " não pode votar.";
    }else if ((idade >= 16) && (idade < 18)){
        resposta.innerHTML = nome + " tem o voto facultativo.";
    }else if ((idade >= 18) && (idade <= 69)){
        resposta.innerHTML = nome + " tem voto obrigatório.";
    }else if (idade >= 70){
        resposta.innerHTML = nome +  " tem o voto facultativo.";
    }else{
        resposta.innerHTML = nome + " Número inválido. Tente novamente.";
    }

    // Correção do estilo
    resposta.style.fontSize = "1.5rem";
    resposta.style.fontWeight = "bold"; // Alterado para 'bold'
    resposta.style.color = "rgb(38, 0, 144)";
}
