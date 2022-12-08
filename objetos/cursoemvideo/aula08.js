class Animal {
    #weight
    constructor(weight, members, age) {
        this.#weight = weight
        this.members = members
        this.age = age
    }
    get getweight() {
        return this.#weight
    }
    set setweight(newweight) {
        this.#weight = newweight
    }
    move() {
        console.log('Test move')
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
        super.move()
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

let animal = new Animal(0.50, 8, 5)
let mammer = new Mammer(80, 2, 10, 'brown')
let reptile = new Reptile(15, 4, 6, 'gray')

console.log(animal.move())
console.log('-----------------------')
console.log(mammer.move())
console.log('-----------------------')
console.log(reptile.move())