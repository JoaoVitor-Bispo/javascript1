let array = [1,6,3,2,7,9,10,9,53,29,56]

const menor_10 = array.filter((el, i) => {
    if (el < 10) {
        return el 
    }
})
console.log(array)
console.log(menor_10)

console.log('--------------------------------')

const nums = [1,1,3,4,5,6,7,7]
const numsduplicatd = nums.filter((e,i,ar) =>{
    if (ar.indexOf(e) != i) {
        return e
    }
})

console.log(numsduplicatd)

// let array = [1,6,3,2,7,9,10,9,53,29,56]
// const menor_10 = []

// array.filter((el, i) => {
//     if (el < 10) {
//         menor_10.push(el) 
//         console.log(el, i)
//     }
// })
// console.log(menor_10)
