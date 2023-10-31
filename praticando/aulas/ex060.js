function contagem(n) {
    console.log(n)

    if(n === 0) {
        return console.log('fim')
    }

    return contagem(n - 1)
}

console.log(contagem(10))