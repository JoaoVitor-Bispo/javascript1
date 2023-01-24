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
    set setprofissao(newprofession) {
        this.#profession = newprofession
    }
}
export default {pessoa}
