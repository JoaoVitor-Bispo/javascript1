class player {
    constructor(nome) {
        this.name = nome
        this.id = Symbol()
    }
}

let players = [new player('j1'), new player('j2'), new player('j3')]

let s1 = players[1].id

players = players.filter((element) => {
    return element.name != 'j1' 
})

const symbolplayers = players.map((element) => {
    return element.id
})
console.log(symbolplayers)