/* Faça um prograa para calcular o valor de uma viagem.

Você terá 5 vaiáveis. Sendo elas:
    1 - Preço de etanol;
    2 - Preço de gasolina;
    3 - O tipo de combustível que está no seu carro;
    4 - Gasto médio de combustível do carro por km;
    5 - Distância em Km da viagem.

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 4.35;
const precoGasolina = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumido = distanciaEmKm / kmPorLitros;


if(tipoCombustivel === 'Etanol'){
    let valorGasto = litrosConsumido * precoEtanol;
    console.log(valorGasto);
} else {
    let valorGasto = litrosConsumido * precoGasolina;
    console.log(valorGasto);
}
