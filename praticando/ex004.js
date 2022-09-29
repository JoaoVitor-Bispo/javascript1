const prompt = require("prompt-sync")();

var tabuada = prompt('Digite um número para a tabuada: ')
for (var c = 0; c < 11; c++) {
    console.log(`${c} x ${tabuada} = ${c * tabuada}`)
}