// IEEE 754-2008 ->padrão que o JS usa para a precisão dos números
let num1 = 0.7; // number
let num2 = 0.1; // number

num1 = ((num1 * 100) + (num2 * 100)) /100; // 0.8
num1 = ((num1 * 100) + (num2 * 100)) /100; // 0.9
num1 = ((num1 * 100) + (num2 * 100)) /100; // 1.0

console.log(num1);
console.log(Number.isInteger(num1));

/* Melhor forma de resolver
num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
num1 += num2; // 1.1
num1 += num2; // 1.2
num1 += num2; // 1.3
num1 += num2; // 1.4
num1 += num2; // 1.5
num1 += num2; // 1.6
num1 += num2; // 1.7
num1 += num2; // 1.8
num1 += num2; // 1.9
num1 += num2; // 2.0

num1 = Number(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));
*/
//console.log(num1.toString() + num2);
//Converter um number em string ->num1= num1.toString();
// encontrar o binario de um número ->console.log(num1.toString(2));
//Escolher quantas casas decimais apresentar -> console.log(num1.toFixed(2));
// Saber se um variavel é inteiro -> console.log(Number.isInteger(num1));
//Saber se um variavel é uma NaN -> console.log(Number.isNaN(temp));

