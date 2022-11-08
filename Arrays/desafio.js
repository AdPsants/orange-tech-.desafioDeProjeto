/*
    1) Crie um programa que dado um número imprima a sua tabuada.
*/

for(let x = 1; x <= 10; x++){
   console.log(x + ' X 5 = ' + x * 5);
}

/*
   2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
*/

let numeros = [2, 3, 9, 17, 22, 30, 32, 34, 60];

for(let i = 0; i < numeros.length; i++){
   
   if(numeros[i] % 2 === 0){
      console.log(numeros[i]);
   }
}

/*

3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]

6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]
*/