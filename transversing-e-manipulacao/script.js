// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const novoMenu = menu.cloneNode(true);
const copy = document.querySelector('.copy');

copy.appendChild(novoMenu);


// Selecione o primeiro DT da dl de Faq
const dt = document.querySelector('dt');
console.log(dt);

// Selecione o DD referente ao primeiro DT
console.log(dt.parentElement);

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');
const faq = document.querySelector('.faq');
const body = document.querySelector('body');
console.log(animais.outerHTML);

const faqInner = faq.outerHTML;
const animaisInner = animais.outerHTML;

body.appendChild(faqInner, animaisInner);


