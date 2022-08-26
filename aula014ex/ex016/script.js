function contagem() {
    var inicio = window.document.getElementById('começo')
    var fim = window.document.getElementById('final')
    var passo = window.document.getElementById('pulo')
    var res = window.document.getElementById('res')
    if (inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        window.alert('[ERRO] Faltam dados!')
    }
    else if (Number(passo.value < 0)) {
        window.alert('[ERRO] O passo não pode ser menor do que 0.')
    }
    else {
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if (p == 0) {
        window.alert('Não é possível uma contagem com passo 0. Ele passará a valer 1.')
        p = 1
    }
    if (i > f) {
        for (f;f <= i;i -= p) {
            res.innerHTML += `${i}\u{1F449}`
        }
    }
    else {
        for (i;i <= f;i += p) {
            res.innerHTML += `${i}\u{1F449}`
        }
    }
    res.innerHTML += '\u{1F3C1}'
    }
}
