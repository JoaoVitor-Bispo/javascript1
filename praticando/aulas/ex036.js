let num = 11
try {
    if (num > 10) {
        throw new Error('Valor acima do permitido')
    }
    console.log(num)
}
catch(e) {
    console.log(e.message)
}
finally {
    console.log('fim do tratamento')
}
