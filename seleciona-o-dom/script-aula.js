//getElementById retorna primeiro elemento com a id selecionada
const animais = document.getElementById('animais');

//getElementByClassName retorna o primeiro elemento com a classe selecionada
const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);


//querySelector retorna o primeiro elemento que combinar com o seletor css
//OBS: caso seja classe precisa de .
const primeiroLi = document.querySelector('li');
console.log(primeiroLi);

const primeiroUl = document.querySelector('ul');
console.log(primeiroUl);

const linkInterno = document.querySelector('[href^="#"');
console.log(linkInterno);

//querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList
const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

//primeiroUl.classList.add('grid-section');

//console.log(gridSectionHTML); //dinamico - atualizou quando adicionou primeiroUl
//console.log(gridSectionNode); //estatico - nao atualizou

gridSectionNode.forEach(function(item, index){
    console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML);

