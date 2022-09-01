var array = []
var n1 = window.document.getElementById('num')
var result = window.document.getElementById('ressl')
var res = window.document.getElementById('res')
function final() {
    res.innerHTML = `${maior_num}`
}
function adicionar() {
        if (n1.value.length == 0) {
            window.alert('[ERRO] Por favor digite algum número.')
        }
        else {
            n = Number(n1.value)
            if (array.indexOf(n) != -1) {
                window.alert('Esse valor já foi digitado.')
            }
            else {
                res.innerText = ''
                array.push(n)
                var elemento = document.createElement('option')
                elemento.text = `O número ${n} foi adicionado`
                result.appendChild(elemento)
                for (num_c in array) {
                    if (array[num_c] > array[num_c]) {
                        maior_num = array[num_c]
                    }
                    else if (array[num_c] < array[num_c - 1]) {
                        menor_num = array[num_c]
                    }


                }
            }
    }
}


