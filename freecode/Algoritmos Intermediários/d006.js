function translatePigLatin(str) {
    const vowel = ['a', 'e', 'i', 'o', 'u']
    let formatedStr;
    let consonantsFromArray;
    let strConvertedToArray = str.split('')

    for(let c in vowel) {
        if(str.startsWith(vowel[c])) {
            formatedStr = str + 'way'
            return false
        }

        consonantsFromArray = strConvertedToArray.findIndex((element) => vowel.indexOf(element) !== -1)

        for(let index = 0;index < consonantsFromArray; index++) {strConvertedToArray.push(strConvertedToArray[index])}
    
        formatedStr = strConvertedToArray.slice(consonantsFromArray).join('') + 'ay'
    }

    console.log(formatedStr)

    return formatedStr
}

translatePigLatin("tste");