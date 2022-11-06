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

function formasDePagamento(formaDePagamento){
    if(formaDePagamento === 1){
        console.log(aplicarDesconto(100, 10)); 
    } else if(formaDePagamento === 2){
        console.log(aplicarDesconto(100, 15));
    } else if(formaDePagamento === 3){
        console.log(aplicarDesconto(100, 0));
    } else {
        console.log(aplicarDesconto(100, -10));
    }
}
formasDePagamento(4);
