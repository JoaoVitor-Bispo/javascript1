var array = []
var n1 = window.document.getElementById('num')
var result = window.document.getElementById('ressl')
var res = window.document.getElementById('res')

function final() {
    if (array.length == 0) {
        window.alert('[ERRO] Digite algum número antes de finalizar.')
    }
    else {
        var maior_num = 0
        var menor_num = 0
        var total_array = 0
        for (var num_c in array) {
            var num = array[num_c]
            if (num_c > 0) {
                if (maior_num < num) {
                    maior_num = num
                }   
                if (menor_num > num) {
                    menor_num = num
                }  
                }
            else {
                maior_num = num
                menor_num = num
            }
            total_array = total_array + array[num_c]
            var media = total_array / array.length
        }
    res.innerHTML = `Temos ${array.length} números cadastrados ao todo.<br>`
    res.innerHTML += `A soma dos números do array é ${total_array}<br>`   
    res.innerHTML += `O maior número do array é ${maior_num}<br>`
    res.innerHTML += `O menor número do array é ${menor_num}<br>`
    res.innerHTML += `A média entre os números do array é de ${media}`
    }
}
function adicionar() {
        if (n1.value.length == 0) {
            window.alert('[ERRO] Por favor digite algum número.')
        }
        else if (n1.value > 100 || n1.value < 1) {
            window.alert('[ERRO] Digite apenas números que estejam entre 1 à 100.')
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
        n1.value = ''
        n1.focus()
}


