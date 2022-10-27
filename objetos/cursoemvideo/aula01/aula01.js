class caneta {
    cor;
    modelo;
    ponta;
    tampada;
    tampar() {
        if (this.tampada) {
            console.log('A caneta ja está tampada')
        }
        else {
            console.log('Tampando a caneta...')
            this.tampada = true
        }
    }
    rabiscar() {
        if (this.tampada) {
            console.log('Não dá pra rabiscar')
        }
        else {
            console.log('Rabiscando...')
        }
    }
    destampar() {
        if (this.tampada == false) {
            console.log('A caneta ja está destampada')
        }
        else {
            console.log('Destampando...')
            this.tampada = false
        }
    }
}

var c1 = new caneta
c1.cor = 'azul'
c1.tampada = false
c1.ponta = 0.5
c1.modelo = 'transparente'
console.log(c1)
c1.destampar()
c1.rabiscar()

var c2 = new caneta
c2.cor = 'vermelha'
c2.tampada = true
c2.ponta = 0.5
c2.modelo = 'maped'
console.log(c2)
c2.tampar()
c2.rabiscar()
c2.destampar()
c2.rabiscar()


// class caneta {
//     constructor(cor, modelo, ponta, tampada) {
//         this.cor = cor
//         this.modelo = modelo
//         this.ponta = ponta
//         this.tampada = tampada           
//     }
// }
// var c1 = new caneta('vermelho', 'bic', 0.5, false)
// console.log(c1)



// c2 = new caneta('azul', 'maped', 1.0, true)
// console.log(c2)
