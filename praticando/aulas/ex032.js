const nums = [7,48,4,9,4,13,7,16,13]

const nums2 = nums.some((el, i) => {
    if (el < 45) {
        console.log('array não ok', i)
    }
    return el > 45
})

console.log(nums2)
