function pigIt(str) {
    let arrayOfWords = str.split(' ')
    const regEx = /^\S/gi

    
    for(let c in arrayOfWords) {
        arrayOfWords[c] = arrayOfWords[c].replace(arrayOfWords[c][arrayOfWords[c].length - 1], arrayOfWords[c][arrayOfWords[c].length - 1] + arrayOfWords[c][0] + 'ay')
        arrayOfWords[c] = arrayOfWords[c].replace(arrayOfWords[c].match(regEx).join(''), '')
    }

    return arrayOfWords.join(' ')
}

pigIt('Hello world !');