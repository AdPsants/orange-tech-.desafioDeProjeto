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
   const numero = numeros[i];
   if(numero % 2 === 0){
      console.log(numero);
   }
}


/*
   3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
*/

let nomes = ['Vanderson', 'Adriano', 'Vitória', 'Venâncio', 'Victor', 'Eduardo'];

for(let i = 0; i < nomes.length; i++){
   const nome = nomes[i];

   if(nome.startsWith('V')){
      console.log(nome);
   }
}

/*
4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;
*/

let numero = [];

for(let i = 10; i <= 50; i++){
   if(i % 2 === 0){
      numero.push(i);
      console.log(numeros);
   }
}

/*
   5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]
*/

let lista = [2, 7, 3, 8, 10, 4];

for(let i = 0; i < lista.length; i++) {
   const media = lista[i];

   if(media < 5){
      console.log(media);
   }
}

/*
6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]
*/

const listaDeNotas = [2, 7, 3, 8, 10, 4];

let maiorNota = 0;

for(let i = 0; i < listaDeNotas.length; i++) {
   const nota = listaDeNotas[i];

   if(nota > maiorNota){
      maiorNota = nota;
   }
}

console.log(maiorNota);