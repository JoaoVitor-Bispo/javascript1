function Mostranome() {
    return 'joao';
}
var f = Mostranome
if (typeof f == 'function') {
    var nome = Mostranome()
}
console.log(nome)

var teste = ['bmw', 'mustang', 'supra']
teste = new Object
teste = {
    'carro1': 'bmw',
    'carro2': 'mustang',
    'carro3': 'supra'
}
if (Array.isArray(teste)) {
    console.log(teste)
}
else {
    console.log(typeof teste)
}
if (typeof teste == 'object') {
    console.log(teste)
}