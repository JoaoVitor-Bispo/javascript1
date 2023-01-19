let map = new Map()
map.set('nome', 'jaozada')
map.set('idade', 15)
map.set('peso', 65)


console.log(map)
console.log(map.keys())
console.log(map.values())
console.log(map.entries())
// console.log(map.clear())

if (map.has('nome')) {
    console.log(`O nome é ${map.get('nome')}`)
}
else {
    console.log('Não tem nome')
}