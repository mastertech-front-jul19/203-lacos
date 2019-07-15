// let numero1 = Number(prompt('Diga o primeiro número:'));
// let numero2 = Number(prompt('Diga o segundo número:'));

// while (isNaN(numero1)) {
//     numero1 = Number(prompt('Você precisa informar valores numéricos. Diga o primeiro número:'));    
// }

// while(isNaN(numero2)) {
//     numero2 = Number(prompt('Você precisa informar valores numéricos. Diga o segundo número:'));    
// }

// if (numero1 > numero2) {
//     alert(`O primeiro número ${numero1} é maior que o número ${numero2}.`);
// }
// else if(numero1 < numero2) {
//     alert(`O segundo número ${numero2} é maior que o número ${numero1}.`);
// }
// else {
//     alert('Os números são iguais.');
// }

let i = 0;
let numeroNovo = Number(prompt(`Diga o ${i+1}º número:`));
let maior = numeroNovo;

while (i < Number(prompt('Quantos números você quer comparar?'))) {
    if (numeroNovo > maior) {
        maior = numeroNovo;
    }

    numeroNovo = Number(prompt(`Diga o ${i+1}º número:`))

    i++;
}

alert(`O maior número digitado foi ${maior}.`);