/*
Primitivos (imutaveis) - string, number, boolean, undefined, 
null (bigint, symbol) - Valor

Referência (mutável) - array, object, function
*/ 
const a = {
    nome: 'Adérito',
    sobrenome: 'Muniunga',
};
const b = {...a}; //Cópia os valores de a

a.nome = 'Peres';
console.log(a);
console.log(b);