let valor = Number(prompt('Diga o valor da tabuada:'));
let inicio = Number(prompt('Diga o primeiro valor da tabuada a ser mostrado:'));
let final = Number(prompt('Diga o último valor da tabuada a ser mostrado:'));
let i = inicio;

while (i <= final) {
    console.log(`${valor} X ${i} = ${valor * i}`);
    i++;
}