// Declarar literalmente um objeto
const aluno = {
    id: '1112785',
    name: 'Adriano da Paixão Santos',
    idade: 28,
    
    descrever: function(){
        console.log(`Meu id é: ${this.id}; Meu nome é: ${this.name}`);
    }
};
aluno.descrever();

const atributo = 'idade';

console.log(aluno[atributo]);
/*
console.log(aluno.id);
console.log(aluno.name);
console.log(aluno.idade);
console.log(aluno);

// Adcionar um atributo ao obeto
aluno.altura = 1.70;
console.log(aluno);


// Deletar um atributo
delete aluno.idade;
console.log(aluno);
*/
