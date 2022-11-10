var controlador = 0

while (true) {
    if (controlador < 11) {
        console.log('Ainda não chegou em 10')
        controlador += 1
        continue
    }
    else {
        console.log('Chegou em 10')
        break
    }
}
console.log('Fim')