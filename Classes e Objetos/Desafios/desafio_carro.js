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

    // Metódo para cálculo do custo de uma viagem
    valorGasto(totalKmPercorrido, precoCombustível){
        return ((totalKmPercorrido * this.litrosPorKm) * precoCombustível).toFixed(2);
    }
}


const hb20 = new Carro('Hiunday', 'Vermelho', 1/10);
const ferrari = new Carro('Ferrari', 'Azul', 1/15);

console.log(hb20.valorGasto(100, 5.79));
