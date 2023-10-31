const fibonacci = initial => {
    console.log(initial)
    if(initial >= 20) {
        return 1
    }

    return fibonacci(initial - 1) + initial
}
console.log(fibonacci(2))