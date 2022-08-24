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
        var imagem = document.createElement('img')
        if (fsexo[0].checked) {
             var genero = 'Homem'
             if (idade >= 0 && idade < 15) {
               imagem.setAttribute('src', 'imagens/foto-bebe-m.png')
             }
             else if (idade < 26) {
                imagem.setAttribute('src', 'imagens/foto-jovem-m.png')
             }
             else if (idade >= 26 && idade < 60) {
                imagem.setAttribute('src', 'imagens/foto-adulto-m.png')
             }
             else {
                imagem.setAttribute('src', 'imagens/foto-idoso-m.png')
             }
        }
        else {
            var genero = 'Mulher'
            if (idade >= 0 && idade < 15) {
                imagem.setAttribute('src', 'imagens/foto-bebe-f.png')
              }
              else if (idade < 26) {
                 imagem.setAttribute('src', 'imagens/foto-jovem-f.png')
              }
              else if (idade >= 26 && idade < 60) {
                 imagem.setAttribute('src', 'imagens/foto-adulto-f.png')
              }
              else {
                 imagem.setAttribute('src', 'imagens/foto-idoso-f.png')
              }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade}`
        res.appendChild(imagem)
    }
}