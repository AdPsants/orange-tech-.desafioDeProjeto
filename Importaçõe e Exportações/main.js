

 const { gets, print } = require('./funçoes-auxiliares');

 /*
    Uma sala contem 5 alunos e para cada aluno foi sorteado um núero de 1 -100.
    Faça um programa que receba os 5 números sorteados para os aluno e mostre o maior número sorteado

    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    98
*/
const numerosSorteados = [];

for(let i = 0; i < 5; i++){
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
    
}
let maiorValor = 0

for(let i = 0; numerosSorteados.length > 0; i++){
    const numeroSorteado = numerosSorteados[i];
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);