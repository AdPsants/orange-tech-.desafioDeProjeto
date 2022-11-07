/*
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e a minha idade é ${this.idade}`);
    }
}

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
*/

/*
    1) Crie uma classe para representar carros. 
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
    Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
    gasto em reais para realizar este percurso.
*/


class Carro{
    marca;
    cor;
    litrosPorKm;

    constructor(marca, cor, litrosPorKm){
        this.marca = marca;
        this.cor = cor;
        this.litrosPorKm = litrosPorKm;
    }

    valorGasto(totalKmPercorrido, precoCombustível){
        return ((totalKmPercorrido * this.litrosPorKm) * precoCombustível).toFixed(2);
    }
}


const hb20 = new Carro('Hiunday', 'Vermelho', 1/10);

const ferrari = new Carro('Ferrari', 'Azul', 1/15);

console.log(hb20.valorGasto(100, 5.79));

/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    imc(peso, altura){
        return (this.peso / Math.pow(this.altura, 2)).toFixed(2);
    }
}

const jose = new Pessoa('José', 70, 1.70);

console.log(jose.imc());






















