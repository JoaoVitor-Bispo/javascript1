var array = []
var n1 = window.document.getElementById('num')
var result = window.document.getElementById('ressl')
var res = window.document.getElementById('res')
var total_array = 0
var maior_num = 0
function final() {
    for (var num_c in array) {
        var num = array[num_c]
        if (num_c > 0) {
            maior_num = array[num_c]
            if (maior_num > num) {
                maior_num = maior_num
            }
            else {
                maior_num = num
            }

            }
        total_array = total_array + array[num_c]
        }   
    res.innerHTML = `Temos ${array.length} números cadastrados ao todo`
    res.innerHTML += `A soma dos números do array é ${total_array}`   
    res.innerHTML += `O maior número do array é ${maior_num}` 
}
function adicionar() {
        if (n1.value.length == 0) {
            window.alert('[ERRO] Por favor digite algum número.')
        }
        else if (n1.value > 100) {
            window.alert('[ERRO] Digite números entre 1 à 100.')
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
            }
    }
}


