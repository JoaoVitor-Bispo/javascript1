import {pessoa, carros} from './export.js'


const c1 = new pessoa('joao', 15, 1.70, 70, 'dev')

console.log(c1)

console.log(c1.getprofession)

c1.setprofession = 'engineer'
console.log(c1.getprofession)

console.log(carros)

