/*
Crie um sistema que recebe um valor numérico informando quantos lances de escada devem ser criados. Na sequência, desenhe esses lances no console seguindo o exemplo:
"Usuário pediu 5 lances de escada"
Saída:
*
**
***
****
*****
*/

let degraus = Number(prompt('Quantos degraus tem sua escada?'));
let material = prompt('Qual seria o material da sua escada?');
let escada = '';
// let i = 0;

// while(i < degraus) {
//     escada += material;
//     console.log(escada);

//     i++;
// }

let i = 1;
while(i <= degraus) {
    console.log(material.repeat(i));

    i++;
}