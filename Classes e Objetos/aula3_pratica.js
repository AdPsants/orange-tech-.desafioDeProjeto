
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    // Metódo para descrever os atributos de uma pessoa
    descrever(){
        console.log(`Meu nome é ${this.nome} e a minha idade é ${this.idade}`);
    }
}

// Função que compara duas pessoas por idade
function compararPessoa(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velha que ${p2.nome}`);
    } else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velha que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const adriano = new Pessoa('Adriano', 28);
const helena = new Pessoa('Helena', 7);

compararPessoa(adriano, helena);



























