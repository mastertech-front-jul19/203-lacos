let numero1 = Number(prompt('Diga o primeiro número:'));
let numero2 = Number(prompt('Diga o segundo número:'));

if (numero1 > numero2) {
    alert(`O primeiro número ${numero1} é maior que o número ${numero2}.`);
}
else if(numero1 < numero2) {
    alert(`O segundo número ${numero2} é maior que o número ${numero1}.`);
}
else {
    alert('Os números são iguais.');
}