class Animal {
    #weight
    constructor(weight, members, age) {
        if (this.move() === undefined){
            throw new TypeError("Method 'move' needs be used")
        }    
        this.#weight = weight
        this.members = members
        this.age = age
        if (this.constructor === Animal) {
            throw new TypeError("Abstract class can't be instantiated")
        }
    }
    get getweight() {
        return this.#weight
    }
    set setweight(newweight) {
        this.#weight = newweight
    }
    move() {

    }
    eat() {
        console.log('Test eating')
    }
    emitsong() {
        console.log('Test emiting')
    }
}

class Mammer extends Animal {
    constructor(weight, members, age, colorfur) {
        super(weight, members, age)
        this.colorFur = colorfur
    }
    move() {
        console.log('Walking')
    }
}

class Whale extends Mammer{
    constructor(weight, members, age, size) {
        super(weight, members, age)
        this.size = size
    }
    move() {
        super.move()
        console.log('swimming')
    }
}

let w1 = new Whale(1000, 2, 30, 1.70)
console.log(w1)
console.log(w1.move())
console.log('-----------------------')


class Reptile extends Animal {
    constructor(weight, members, age, colorscale) {
        super(weight, members, age)
        this.colorScale = colorscale
    }
    move() {
        console.log('Crawling')
    }
}

let mammer = new Mammer(80, 2, 10, 'brown')
let reptile = new Reptile(15, 4, 6, 'gray')

console.log(mammer.move())
console.log('-----------------------')
console.log(reptile.move())