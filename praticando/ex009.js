var objetos = ['celular', 'pente']
objetos.push('controle')
objetos.unshift('copo')
console.log(objetos)
objetos.shift()
objetos.pop()
objetos[2] = 'ventilador'
objetos.push('cabide')
objetos.splice(2, 1)
console.log(objetos)
