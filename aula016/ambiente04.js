function fatorial(n) {
    ft = 1
    for (var c = n;c > 1; c--)
        ft *= c
    console.log(`${ft}`)
}
fatorial(5)