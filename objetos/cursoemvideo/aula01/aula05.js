class Caneta {
    constructor(tipo, borracha) {
        this.tipo = tipo // 1 = desenho, 2 = escrever, 3 = colorir
        this.borracha = borracha
        this._ponta = true
        this._carga = true
        switch(this.tipo) {
            case 1:
                this.tipo = 'desenho'
                break
            case 2:
                this.tipo = 'escrita'
                break
            case 3:
                this.tipo = 'coloração'
                break
            default:
                this.tipo = undefined
        }
    }
    rabiscar() {
        console.log('Rabiscando...')
    }
}
class canetaDesenho extends Caneta {
    constructor(grafite) {
        super(1, true)
        this.tampa = true
        this.grafite = grafite
    }
}

class canetaColore extends Caneta{
    constructor(cores) {
        super(3, false)
        this.cores = cores
        this.cara = true
    }
}
var c2 = new canetaDesenho(false)
console.log(c2.rabiscar())
console.log(c2)

var c1 = new canetaColore(3)
console.log(c1.rabiscar())
console.log(c1)
