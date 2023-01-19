var controlador = 0

while (true) {
    if (controlador < 10) {
        console.log(controlador)
        console.log('Ainda não chegou em 10')
        controlador += 1
    }
    else {
        console.log(controlador)
        console.log('Chegou em 10')
        break
    }
}
console.log('Fim')