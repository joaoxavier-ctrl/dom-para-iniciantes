const menu = document.querySelector('.menu');

menu.classList.add('ativo','azul');

if(menu.classList.contains('azul')){
  console.log('possui azul');
}else{
  console.log('nao possui azul');
}

menu.className += ' vermelho';

const animais = document.querySelector('.animais');

console.log(animais.attributes);

const img = document.querySelector('img');

img.setAttribute('alt','Raposa');

console.log(img.getAttribute('alt'));