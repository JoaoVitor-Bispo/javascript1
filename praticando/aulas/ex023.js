var mostrarnome = function(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    console.log(this.nome)
    console.log(this.sobrenome)

    this.teste = function () {
        setTimeout(function () {
            console.log(this.nome)
            console.log(this.sobrenome)    
        })
        setTimeout(() => {
            console.log(this.nome)
            console.log(this.sobrenome)    
        })
    }
}
var n = new mostrarnome('321', '123')
n.teste()