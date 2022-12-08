class carro {
    static ligado = false
    constructor(portas) {
        this.Portas = portas
    }
    static ligar() {
        carro.ligado = true
    }
}

let c1 = new carro(4)
let c2 = new carro(2)
let c3 = new carro(6)

// c1.ligar()

carro.ligar()

console.log(c1)
console.log(c2)
console.log(c3)

console.log(carro)