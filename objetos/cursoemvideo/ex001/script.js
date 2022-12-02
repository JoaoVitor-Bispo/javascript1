class carro {
    constructor(nome, portas) {
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.velocidade = 0
        this.cor = undefined
    }
    ligar() {
        this.ligado = true
    }
    desligar() {
        this.ligado = false
    }
    set setcor(newcor) {
        this.cor = newcor
    }
}
class militar extends carro {
    constructor(nome, portas,blindagem, municao) {
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
    }
}

let c1 = new carro('teste', 4)
c1.ligar()
console.log(c1)

let c2 = new militar('teste2', 4,3, 20)
console.log(c2)