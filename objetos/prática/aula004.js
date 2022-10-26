var mostrarnome = function(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    console.log(this)
    console.log(arguments)
}
var pessoa = {
    nome:'jaozada',
    idade: 15,
    genero: "masculino",
    sobrenome: 'silva',
    pegarnome: mostrarnome
}
var carros = {
    nome: 'gol',
    marca: 'VW',
    sobrenome: 'bolinha',
    pegarnome: mostrarnome 
}

mostrarnome.call(pessoa, 'elememeo', 'bispo')
mostrarnome.apply(pessoa, ['elememeo', 'bispo'])
var getnome = mostrarnome.bind(pessoa, 'jao', 'bispo')
getnome()