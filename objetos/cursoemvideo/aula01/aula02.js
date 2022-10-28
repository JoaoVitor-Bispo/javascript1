class Caneta {
    constructor(cor, modelo, ponta, carga) {
        this.cor = cor
        this._modelo = modelo
        this._ponta = ponta
        this._carga = carga
    }
}

var c1 = new Caneta('Vermelho', 'maped', '0.5', '90')
console.log(c1)

var c2 = new Caneta()
console.log(c2)
