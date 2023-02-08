// import getCarros, {pessoa as people, carros as cars} from './export03.js'
//Não pode renomear importações de exportações padrão

import * as module from './export03.js'
//Forma de importar todo o módulo de uma vez

const c1 = new module.pessoa('joao', 15, 1.70, 70, 'dev')

console.log(c1)

console.log(c1.getprofession)

c1.setprofession = 'engineer'
console.log(c1.getprofession)

console.log(module.carros[0])

console.log(module.default())
