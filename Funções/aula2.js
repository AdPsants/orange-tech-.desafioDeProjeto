/*
function sayMyName(name){
    return name;
}

(function classificarIdade(idade){
    if(idade >= 18){
        console.log('Menu nome é ' + sayMyName("Adriano") + ' e eu sou maior de idade');
    } else{
        console.log(" e eu sou menor de idade");
    }
})(18);
*/


// Colocando em função o desafio de Descontos
/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
    Código Condição de pagamento:
    1 À vista Débito, recebe 10% de desconto;
    2 À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 Em duas vezes, preço normal de etiqueta sem juros;
    4 Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
function aplicarDesconto(precoEtiqueta, desconto){
    return (precoEtiqueta - (precoEtiqueta * (desconto / 100)));
}
function aplicarJuros(precoEtiqueta, juros){
    return (precoEtiqueta + (precoEtiqueta * (juros / 100)));
}
function formasDePagamento(formaDePagamento){
    if(formaDePagamento === 1){
        console.log(aplicarDesconto(100, 10)); 
    } else if(formaDePagamento === 2){
        console.log(aplicarDesconto(100, 15));
    } else if(formaDePagamento === 3){
        console.log(aplicarDesconto(100, 0));
    } else {
        console.log(aplicarJuros(100, 10));
    }
}
formasDePagamento(4);

/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.
    Média = (nota 1 + nota 2 + nota 3) / 3;
    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

// Função para cálculo da média
function notasAluno(nota1, nota2, nota3){
    return  media = (nota1 + nota2 + nota3) / 3;
}

// Chamando a função e passando as notas como parâmetro
notasAluno(4, 3, 3);

// Fazendo as comparações da média e executando a função, imprimindo o resultado
(function resultadoFinal(){

    if(media < 5){
        console.log("Reprovado");
    } else if(media >= 5 && media <= 7){
        console.log("Recuperação");
    } else{
        console.log("Aprovado");
    }
})();

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

// Função para cálcuo do IMC
function calcularImc(peso, altura){
    peso = 56;
    altura = 1.82;
    return imc = peso / Math.pow(altura, 2);
}

// Função para classificar as pessoas de acordo com seu IMC
(function classificarPessoas(){
    const imc = calcularImc;

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
})();

