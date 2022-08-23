function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nascimento = window.document.getElementById('nascimento')
    var res = window.document.getElementById('resultado')
    if (nascimento.lenght == 0 || nascimento.value > ano) {
        res.innerHTML = '[ERRO] Coloque caracteres válidos.'
    }
    else {
        fsexo = window.document.getElementsByName('sexo')
        idade = ano - Number(nascimento.value)
        if (fsexo[0].checked) {
             var genero = 'Homem'
        }
        else {
            var genero = 'Mulher'
        }
        res.innerHTML = `${genero}`
    }
}