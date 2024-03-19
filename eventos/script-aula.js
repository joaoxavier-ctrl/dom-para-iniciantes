/*const img = document.querySelector('img');

function callback(){
    console.log('clicou');
}

img.addEventListener('click', callback);*/

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event){
    console.log(event.currentTarget);
    console.log(event.target);
    console.log(event.type);
}

animaisLista.addEventListener('click', callbackLista);

console.log(animaisLista);

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event){
    event.preventDefault();
    console.log(event);
}

linkExterno.addEventListener('click', handleLinkExterno);

const h1 = document.querySelector('h1');

function handleEvent(event){
    console.log(event.type, event);
}

h1.addEventListener('click', handleEvent);

window.addEventListener('scroll', handleEvent);

const imgs = document.querySelectorAll('img');

function handleImg(event){
    console.log(event.currentTarget.getAttribute('src'));
}

imgs.forEach((img) =>{
    img.addEventListener('click', handleImg);
});