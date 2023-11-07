function likes(names) {

    let namesReceived = names

    //Verifying if array's empty or unitary and returning the response.
    if(namesReceived.length == 0 || namesReceived.length == 1) {
        namesReceived = namesReceived[0] || 'no one'
        return `${namesReceived} likes this`
    }

    //Verifying if array needs 'others like this'
    if(namesReceived.length >= 4) {
       const lengthOfCutNamesOff = namesReceived.filter((element, index) => index > 1).length
       namesReceived.splice(2, lengthOfCutNamesOff, `${lengthOfCutNamesOff} others`)
    }

    //Adding 'and' in penultimate element
    namesReceived.splice(namesReceived.length - 1, 0, 'and')

    //Verifying where to put the comma(two elements before 'and')
    const indexToAddComma = namesReceived.findIndex(element => element == 'and')
    namesReceived[indexToAddComma - 2] = namesReceived[indexToAddComma - 2] + ',' || ''
    
    //returning full formated string
    return `${namesReceived.join(' ')} like this`
}

console.log(likes(["Alex", "Jacob", 'Michael']))
