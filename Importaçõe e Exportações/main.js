

 const { gets, print } = require('./funcoes-auxiliares');

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
let maiorNumero = 0;

for(let i = 0; i < 5; i++){
    const numero = gets();
    
    if(numero > maiorNumero){
        maiorNumero = numero;
    }
}

print(maiorNumero);


/*
for(let i = 0; i < numerosSorteados.length; i++){
    const numero = numerosSorteados[i];

    if(numero > maiorNumero){
        maiorNumero = numero;
    }
}
print(maiorNumero);
*/
