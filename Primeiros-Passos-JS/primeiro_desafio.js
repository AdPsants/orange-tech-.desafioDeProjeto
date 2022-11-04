/*
Faça um progrma para calcular o valor de numa viagem
Você terá 3 variaveis. Sendo elas:
    - Preço do combustível
    - Gasto médio de combustível do carro por km 
    - Distância em KM da viagem.

Imprima no console o valor que será gasto de para realizar essa viagem
*/
const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaKm = 100;

const litrosConsumido = (distanciaKm / kmPorLitros) * precoCombustivel;

console.log("O custo da viagem é de R$ " + litrosConsumido );
