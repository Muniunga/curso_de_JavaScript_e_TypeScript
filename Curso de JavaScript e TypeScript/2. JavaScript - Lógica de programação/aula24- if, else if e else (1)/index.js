/* 
ENtre 0 e 11- Bom Dia
ENtre 12 e 17- Boa tarde
ENtre 18 e 23- boa noite
*/

// If pode ser executado sozinho
// Sempre que utilizo a palavra else, preciso de um If antes
// Eu posso ter varuos else ifs na checagem (condição)
// Só posso ter um else na checagem
// Podemos usar condições sem else if, utilizando apenas if e else
 
const hora = 50;

if (hora >= 0 && hora <=11){
    console.log('Bom dia');
}  else if (hora>=12 && hora <=17){
    console.log('Boa tarde')
}  else if (hora>=18 && hora <=23){
    console.log('Boa noite')
} else {
    console.log('Olá!')
}