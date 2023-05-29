// function getMultiplier(multiplier) {
//     return function(value) {
//         return value * multiplier
//     }
// }

const getMultiplier = multiplier => value => value * multiplier

const [double, triple, quadruple] = [getMultiplier(2), getMultiplier(3),getMultiplier(4)]
console.log(double(15))