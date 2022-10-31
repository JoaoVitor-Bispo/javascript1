class Pessoa {
    static total_pessoas = 0;
    constructor(nome, idade, altura, peso) {
        this._nome = nome;
        this._idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.imc = this.peso / (this.altura * this.altura);
        Pessoa.total_pessoas += 1
    }
    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }
    classificaIMC() {
        let valorimc = this.imc.toFixed(2)
        let classificação = ''
        if (valorimc < 18.5) {
            classificação = 'Abaixo do peso'
        }
        else if (valorimc > 18.5 && valorimc < 24.9) {
            classificação = 'Peso normal'
        }
        else if (valorimc > 24.9 && valorimc < 30) {
            classificação = 'Sobrepeso'
        }
        else if (valorimc > 30) {
            classificação = 'obesidade'
        }
        return classificação
    }
    get nome() {
        return this._nome;
    }
    set newnome(novonome) {
        this._nome = novonome;
    }
    get idade() {
        return this._idade;
    }
    set novaidade(novaidade) {
        this._idade = novaidade;
    }
}

var c1 = new Pessoa('J', 15, 1.70, 65);
 console.log(c1);
 console.log(c1.classificaIMC())

var c2 = new Pessoa('R', 20, 1.60, 60);
console.log(c2);
console.log(c2.classificaIMC())

var c3 = new Pessoa('L', 25, 1.70, 100);
console.log(c3);
console.log(c3.classificaIMC())

console.log(Pessoa.total_pessoas)


