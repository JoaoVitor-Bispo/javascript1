class Pessoa {
    constructor(nome, idade, altura, peso) {
        this._nome = nome
        this._idade = idade
        this.altura = altura
        this.peso = peso
        this.imc = this.peso / (this.altura * this.altura)
    }
    calcularIMC() {
        return this.peso / (this.altura * this.altura)
    }
    get nome() {
        return this._nome
    }
    set newnome(novonome) {
        this._nome = novonome
    }
    get idade() {
        return this._idade 
    }
    set novaidade(novaidade) {
        this._idade = novaidade
    }
}

var c1 = new Pessoa('J', 15, 1.70, 65)
console.log(c1)

var c2 = new Pessoa('M', 20, 1.65, 60)
console.log(c2)
