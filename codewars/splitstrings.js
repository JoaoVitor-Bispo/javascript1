function solution(str) {

    const pairOfLetters = []

    for(let c = 1;c <= str.length; c += 2) {
        if(str[c] == undefined) {
            pairOfLetters.push(str[c - 1] + '_')
            break
        }

        pairOfLetters.push(str[c - 1] + str[c])
    }

    return pairOfLetters
}
console.log(solution('abcdef'))