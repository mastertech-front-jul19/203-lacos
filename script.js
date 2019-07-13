/*
Crie um programa que pede um valor numérico do usuário.
O programa deve mostrar todos os números pares entre 0 e o valor digitado.
*/

let valorDigitado = Number(prompt('Qual o valor total do programa?'));

while (isNaN(valorDigitado) || valorDigitado < 0) {
    valorDigitado = Number(prompt('Você não digitou um número válido. Por favor, ajuda eu.'));
}

// let i = 1;

// while (i < valorDigitado) {
//     if (i % 2 === 0) {
//         console.log(`O número ${i} é par!`);
//     }
//     // else {
//     //     console.log(`O número ${i} é ímpar!`);
//     // }
    
//     i++;
// }

let i = 0;
while (i < valorDigitado) {
    console.log(`O número ${i} é par`);
    i += 2;
}