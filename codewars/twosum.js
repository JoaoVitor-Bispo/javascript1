function twoSum(numbers, target) {

    const numberOfRepeats = numbers.length ** 2
    let index = 0
    let num = 0
    const arrayOfIndexes = []

    for(let c = 0; c < numberOfRepeats; c++) {
        if(index == numbers.length - 1) {
            index = 0
            num += 1
        }
        if(numbers[num] + numbers[index] == target && num != index) arrayOfIndexes.push(index, num)
        index++
    }

    return arrayOfIndexes
}

twoSum([1, 2, 3], 4)