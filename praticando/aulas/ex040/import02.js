import getCarros, {pessoa, carros} from './export02.js'

//or -> import {pessoa, carros} from './export02.js'
// import getCarros from './export02.js'



const c1 = new pessoa('joao', 15, 1.70, 70, 'dev')

console.log(c1)

console.log(c1.getprofession)

c1.setprofession = 'engineer'
console.log(c1.getprofession)

console.log(carros[0])

console.log(getCarros())
