const prompt = require("prompt-sync")();
var soma = 0
for (var c = 0;c < 6; c++) {
    var num = prompt(`Digite o ${c}° número`)
    if (num % 2 == 0) {
        soma += num
    }
}
console.log(soma)