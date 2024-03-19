const h1 = document.querySelector('h1');

console.log(h1.innerHTML);
console.log(h1.outerHTML);
console.log(h1.innerText);

const lista = document.querySelector('.animais-lista');

console.log(lista);

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
const mapa = document.querySelector('.mapa');


//contato.replaceChild(titulo, mapa);

const novoh1 = document.createElement('h1');
novoh1.innerText = 'Novo titulo';
novoh1.classList.add('titulo');

mapa.appendChild(novoh1);

console.log(novoh1);

const faq = document.querySelector('.faq');
const cloneh1 = h1.cloneNode(true);
cloneh1.classList.add('azul');

faq.appendChild(cloneh1);

