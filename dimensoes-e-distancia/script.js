// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector('img');
console.log(primeiraImg.offsetTop);

// Retorne a soma da largura de todas as imagens
const imagens = document.querySelectorAll('img');
const arrayImagens = Array.from(imagens);
const larguraTotal = arrayImagens[0].clientWidth * arrayImagens.length;

console.log(larguraTotal);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
const arrayLinks = Array.from(links);

for(i = 0; i < 4; i++){
    //console.log(`${arrayLinks[i].clientWidth}  ${arrayLinks[i].clientHeight}`);
    if(arrayLinks[i].clientHeight<48 || arrayLinks[i].clientWidth<48){
        console.log(`link ${arrayLinks[i]} tamanho inapropriado`)
    }
}

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const tamanhoJanela = window.innerWidth;
const menu = document.querySelector('.menu');

if(tamanhoJanela<720){
    menu.classList.add('menu-mobile');
    console.log('adicionado menu-mobile');
}
