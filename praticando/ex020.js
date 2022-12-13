function* contador() {
    let c = 0
    while (true) {
        yield c++
    }
}

const iterator = contador()
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)



