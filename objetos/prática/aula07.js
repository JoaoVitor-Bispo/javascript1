class carro {
    constructor(portas) {
        this.ligar = false
        this.Portas = portas
    }
    teste() {
        console.log('teste')
    }
}

let c1 = new carro(4)
let c2 = new carro(2)

carro.prototype.farol = 2

carro.prototype.teste = function() {
    console.log('modificado')
}

console.log(c1.farol)
console.log(c1.teste())

console.log(c1.farol)
console.log(c2.teste())