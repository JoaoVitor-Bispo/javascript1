let array = [1,6,3,2,7,9,10,9,53,29,56]

const menor_10 = array.filter((el, i) => {
    if (el < 10) {
        return el 
    }
})
console.log(array)
console.log(menor_10)

// let array = [1,6,3,2,7,9,10,9,53,29,56]
// const menor_10 = []

// array.filter((el, i) => {
//     if (el < 10) {
//         menor_10.push(el) 
//         console.log(el, i)
//     }
// })
// console.log(menor_10)
