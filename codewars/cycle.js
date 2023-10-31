function cycle(dir, arr, cur) {

    let nextPosition;

    const currentPosition = arr.findIndex(element => element == cur)
    const nextOrPrevNumber = eval(`${currentPosition} + (${dir})`)

    if(nextOrPrevNumber == 0) nextPosition = arr[arr.length - 1]
    else if (nextOrPrevNumber > arr.length - 1) nextPosition = arr[0]
    else nextPosition = arr[nextOrPrevNumber]

    if(nextPosition == undefined) nextPosition = null

    return nextPosition
}
console.log(cycle(-1, [1, 2, 3], 3))
