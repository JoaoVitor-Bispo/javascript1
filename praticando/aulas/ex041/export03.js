class pessoa {
    #profession
    constructor(name, age, stature, weight, profession) {
        this.name = name
        this.age = age
        this.stature = stature
        this.weight = weight
        this.#profession = profession
    }
    get getprofession() {
        return this.#profession
    }
    set setprofession(newprofession) {
        this.#profession = newprofession
    }
}

const carros = ['porsche', 'bmw', 'mustang', 'corvette']

const getCarros = () => {
    return carros
}
//or -> export defaul const getCarros = () => {
//     return carros
// }



export {pessoa, carros}
export default getCarros

