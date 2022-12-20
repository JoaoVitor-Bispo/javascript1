const nums = [7,4,8,9,10,13,7,16,13]

const numseq = nums.every(function(el, i) {
    if (el > 3) {
        return el
    }
})
console.log(numseq)

