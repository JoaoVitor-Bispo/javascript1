let array = [12,3,5,3,4]
let pares = []
let impares = []
let c = 0
while (true) {
    if (array[c] % 2 == 0) {
        pares.push(array[c])
    }
    else {
        impares.push(array[c])
    }
    c += 1
    if (c == array.length) {
        break
    }
}
array.push(pares, impares)
console.log(array)
console.log(pares)
console.log(impares)