
let MenuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    MenuItem.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

MenuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

//Expandir o menu

let btnExp = document.querySelector('#btn-exp')
let menuSide = document.querySellector('.menu-latera')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})

// Seleciona os elementos do menu lateral e o botão de abrir/fechar
const menuLateral = document.querySelector('.menu-lateral');
const btnAbrir = document.createElement('button');

// Configura o botão de abrir o menu
btnAbrir.textContent = '☰'; // Ícone do menu (pode trocar por outro)
btnAbrir.classList.add('btn-abrir');
document.querySelector('header').appendChild(btnAbrir); // Adiciona no cabeçalho

// Evento para abrir o menu
btnAbrir.addEventListener('click', () => {
    menuLateral.classList.toggle('aberto');
});
