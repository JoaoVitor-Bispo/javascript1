var num = 107
var total = 0
for (var c = 0;c < num + 1; c++) {
    if (num % c == 0) {
        total++
    }
}
if (total == 2) {
    console.log(`O número ${num} foi divisível ${total} vezes, e por isso ele é um número primo.`)
}
else {
    console.log(`O número ${num} foi divisível ${total} vezes, e por isso ele não é um número primo.`)
}