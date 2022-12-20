let array = [1,5,3,2,6,9,7,8]

const elementfind = array.find((element, index, array) => {
    if (element > 3) {
        return index
    }
})
console.log(elementfind)