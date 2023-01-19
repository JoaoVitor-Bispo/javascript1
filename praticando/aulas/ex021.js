function* teste() {
    console.log(yield)
}

const value = teste(100)

console.log(value.next(1))
console.log(value.next(2))







// function* genrandom() {
//     console.log('inicio')
//     yield Math.random()
//     console.log('fim')
//     console.log('fim')

//     yield 'MEIO'
//     console.log('fim')

//     console.log('inicio')
//     yield 'teste'
//     console.log('fim')

// }
// const iterator = genrandom()
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

