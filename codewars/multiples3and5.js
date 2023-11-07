/*
Challenge: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

function solution(number) {
    if(number <= 0 || number < 4) return 0

    const numbersPreviousTheParameter = []

    for(let c = 1;c < number; c++) numbersPreviousTheParameter.push(c)

    const multiplesOfThreeAndFive = numbersPreviousTheParameter.filter(multiples => multiples % 3 == 0 || multiples % 5 == 0)

    console.log(multiplesOfThreeAndFive)

    const sumOfAllNumbers = multiplesOfThreeAndFive.reduce((previous, next) => previous + next)

    return sumOfAllNumbers
}

console.log(solution(3))