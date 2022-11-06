class Pessoa {
    id;
    nome;
    idade;
    anoDeNascimento;

    constructor(id, nome, idade){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever(){
        console.log(`Meu id é ${this.id} meu nome é ${this.nome} e a minha idade é ${this.idade}`);
    }
}

const adriano = new Pessoa('1112785', 'Adriano', 28);

console.log(adriano);































