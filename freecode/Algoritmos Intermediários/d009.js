function fearNotLetter(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let iterator = alphabet.indexOf(str[0])
    let newArr = []

    for(let c = 0;c < str.length; c++) {
        newArr.push(alphabet[iterator])
        iterator++
    }
    newArr = newArr.find((element, index) => {
        return element != str[index]
    })
    return newArr;
}
  
console.log(fearNotLetter("abcdefghjklmno"))
