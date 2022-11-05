/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.
    Média = (nota 1 + nota 2 + nota 3) / 3;
    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

const nota1 = 5;
const nota2 = 4;
const nota3 = 5;

const media = (nota1 + nota2 + nota3) / 3 ;

console.log(media.toFixed(2));

if(media < 5){
    console.log("Reprovado");
} else if(media > 5 && media <= 7){
    console.log("Recuperação");
} else{
    console.log("Aprovado");
}


/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 
    Formula do IMC:
    IMC = peso / (altura * altura)
    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.
    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/

const peso = 75;
const altura = 1.70;

const imc = peso / Math.pow(altura, 2);

if(imc < 18.5){
    console.log("Abaixo do peso");
} else if(imc > 18.5 && imc <= 25){
    console.log("Peso normal");
} else if(imc > 25 && imc <= 30){
    console.log("Acima do peso");
} else if(imc > 30 && imc <= 40){
    console.log("Obeso");
} else{
    console.log("Obesidade grave");
}

/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
    Código Condição de pagamento:
    1 À vista Débito, recebe 10% de desconto;
    2 À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 Em duas vezes, preço normal de etiqueta sem juros;
    4 Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let precoEtiqueta = 90;
const formaDePagamento = 4;

if(formaDePagamento === 1){
    precoEtiqueta += - precoEtiqueta * 0.1;
    console.log(precoEtiqueta); 
} else if(formaDePagamento === 2){
    precoEtiqueta += - precoEtiqueta * 0.15;
    console.log(precoEtiqueta);
} else if(formaDePagamento === 3){
    console.log(precoEtiqueta);
} else {
    precoEtiqueta += + precoEtiqueta * 0.1;
    console.log(precoEtiqueta);
}