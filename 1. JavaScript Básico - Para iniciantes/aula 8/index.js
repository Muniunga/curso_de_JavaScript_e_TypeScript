/*
Adérito Peres Muniunga tem 21 , pesa 51 kg
tem 1.7 de altura e seu IMC é de 17.647058823529413
Adérito Peres nasceu em 2000
*/
const nome = "Adérito Peres";
const sobreNome = "Muniunga";
const idade = 21;
const peso = 51 ;
const alturaEmM = 1.70;
let imc; // peso/ (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2021 - 21;

// template strings

console.log(`${nome} ${sobreNome} tem ${idade}, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`nome nasceu em ${anoNascimento}`);