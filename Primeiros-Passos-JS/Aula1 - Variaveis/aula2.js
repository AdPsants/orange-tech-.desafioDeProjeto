//Condicionais

const numero = 0;


const eNumeroPar = numero % 2 === 0;

//console.log(eNumeroPar);


if(numero === 0){
    console.log("O número " + numero + " é inválido");
}else if(eNumeroPar != 0) {
    console.log("O número " + numero + " é pá.");
} else {
    console.log("O número " + numero + " é impar");
}

