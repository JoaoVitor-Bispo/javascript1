function moveZeros(arr) {

    arr = arr.map(element => String(element))
    // for(let c in arr) {
    //     if(arr[c] === 1 * 0) {
    //         arr.push(arr[c])
    //         arr.splice(c, 1)
    //     }
    // }
    return arr
}

console.log(moveZeros([9, +0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0]))