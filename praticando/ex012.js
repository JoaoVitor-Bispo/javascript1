function contador(i,f,p) {
    console.log('Contagem de 0 até 10 de 2 em 2')
    for (var n = 0;n < 11;n += 2) {
        console.log(n)
    }
    console.log('Contagem de 10 até 0 de 2 em 2')
    for (var n = 10;n > -2;n-= 2) {
        console.log(n)
    }
    console.log(`Contagem personalizada: de ${i} até ${f} com passo ${p}`)
    if (i > f) {
        for (i;i > f; i -= p)
        console.log(i)
    }
}
contador(12,-10,7)