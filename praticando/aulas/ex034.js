const nums = [7,48,4,9,4,13,7,16,13]

const red = nums.reduce((ant, atual, index, array) => {
    console.log(ant, atual)
    return ant + atual
}, 0)
console.log('-------------------')
console.log(red)




// const nums = [50,48,4,9,4,13,7,16,13]

// const red = nums.reduce((ant, atual, index, array) => {
//     if (ant > atual) {
//         console.log(ant)
//     }
//     else {
//         console.log(atual)
//     }
//     return ant, atual
// })
// console.log('-------------------')
// console.log(red)


// const obj = [
//     {
//         nome: 'Joao',
//         idade: 15,
//         altura: 1.70
//     },
//     {
//         nome: 'Maria',
//         idade: 20,
//         altura:  1.68
//     },
//     {
//         nome: 'Pedro',
//         idade: 16,
//         altura: 1.68
//     }
// ]

// const reduc = obj.reduce((anterior, atual, index, array) => {
//     return atual
// })
