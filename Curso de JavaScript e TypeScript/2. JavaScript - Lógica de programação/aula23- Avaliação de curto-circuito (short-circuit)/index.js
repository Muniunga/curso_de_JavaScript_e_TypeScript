/**
 && -> false && true -> "o valor mesmo"
 || -> false || true -> vai retornar "o valor verdadeiro"

 FALSY (VALORES QUE AVALIAM EM FALSO QUANDO NECESSARIO)
 false
 0
 ""
 null / undefined
 NaN
 */
/* Fazer uma condição sem usar nenhuma estrutura condicional
function falaOi(){
    return 'Oi';
}
let vaiExecutar = 'Aderito';

console.log(vaiExecutar && falaOi());
*/

//Fazer uma condição sem usar nenhuma estrutura condicional
//console.log(0 || null || 'Adérito Peres' || true);
/*const corUsuario = 'vermelho';
const corPadrao ='preto';
console.log(corUsuario || corPadrao);
*/

const a =0;
const b =null;
const c ='false';//aqui
const d =false;
const e =NaN;

console.log(a || b || c || d || e);