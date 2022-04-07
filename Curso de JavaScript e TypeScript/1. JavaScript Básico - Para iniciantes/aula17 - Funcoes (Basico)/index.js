// 1 Forma de criar função
// function soma(x=1,y=1){
// const resultado = x+y;
// return resultado;
// }

// const resultado = soma(4,2);
// console.log(resultado)

//---------------------------------
// 2 Forma de criar função
// const raiz = function (n) {
//    return n**0.5;
// };

// console.log(raiz(9));
// console.log(raiz(16));
// console.log(raiz(25));

//---------------------------------
// 3 Forma de criar função
const raiz =  n => n**0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));