class caneta {
    constructor(cor, modelo, ponta, tampada) {
        this.cor = cor
        this.modelo = modelo
        this.ponta = ponta
        this.tampada = tampada
    }
}
var c1 = new caneta('vermelho', 'bic', 0.5, false)
console.log(c1.cor)
c1.cor = 'azul'
console.log(c1.cor)




c2 = new caneta('azul', 'maped', 1.0, true)
console.log(c2)
