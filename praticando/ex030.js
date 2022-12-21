const nums = [7,47,3,9,10,1,7,16,13]

const numseq = nums.every((el, i) => {
    if (el < 5) {
        console.log(`Array não conforme naa posição ${i}`)
    }
    return el > 5
})
console.log(numseq)

