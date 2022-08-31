var array = []
var n1 = window.document.getElementById('num')
var result = window.document.getElementById('ressl')
var res = window.document.getElementById('res')
function adicionar() {
    while (true) {
        if (n1.value.length == 0) {
            window.alert('[ERRO] Por favor digite algum número.')
        }
        else {
            n = Number(n1.value)
            array.push(n)
            var elemento = document.createElement('option')
            elemento.text = `O número ${n} foi adicionado`
            result.appendChild(elemento)
            break
        }
    res.innerHTML = `${array}`
    }
}

