var soma = 0
for (var c = 1; c < 501; c++) {
    if (c % 2 != 0) {
        if (c % 3 == 0) {
            soma += c
        }
    }
}
console.log(soma)