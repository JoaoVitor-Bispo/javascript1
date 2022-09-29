var lista = [1,3,21,5,'b']
lista.sort()
lista.push('c')
var tamanho = lista.length
console.log(lista)
console.log(`Sua lista tem ${tamanho} valores`)
let pos = lista.indexOf(3)
console.log(`O valor 3 tá na posição ${3}`)
if (pos == -1) {
    console.log('O valor não foi encontrado.')
}
else {
    console.log(`O valor 3 tá na posição ${3}`)
}