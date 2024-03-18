const imgs = document.querySelectorAll('img');
//console.log(imgs);

imgs.forEach(function(item, index, array){
    //console.log(item, index);
});

//forEach é um metodo de array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transforma-los em um array.
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

//console.log(titulos);
//console.log(titulosArray);

titulosArray.forEach(function(item, index, array){
  //console.log(item, index, array);
});

//Arrow Function sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.

titulosArray.forEach((item, index) =>{
    console.log(item, index);
  });