/* Criar Objecto com funcao
function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade}
}

const pessoa1= criaPessoa('Aderito', 'Peres', 21);
const pessoa2= criaPessoa('Maria', 'Peres', 57);
const pessoa3= criaPessoa('Isamara', 'José', 20);
const pessoa4= criaPessoa('Isanio', 'Nicolau', 22);
const pessoa5= criaPessoa('DOrivaldo', 'dos Santos', 21);
console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);
*/


const pessoa1= {
    nome:'Aderito',
    sobrenome: 'Peres',
    idade: 21,

    fala () {
        console.log(`A minha idade atual é ${this.idade} `);
    },

   incrementaIdade(){
       this.idade++;
   } 
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();