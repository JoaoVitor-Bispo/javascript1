var hora_atual = new Date()
var hora = hora_atual.getHours()
var horario = window.document.getElementById('horario')
var foto = window.document.getElementById('imagem')
var bg = window.document.getElementById('cria')
horario.innerText = `Agora são ${hora} horas.`
if (hora < 12) {
    bg.style.background = '#C7B68B'
    foto.src = 'imagens/dia.jpg'
}
else if (hora < 18) {
    bg.style.background = '#AA7A64'
    foto.innerHTML = '<img src="tarde.jpg">'
}
else {
    bg.style.background = '#4A4B4C'
    foto.src = '<img src="noite.jpg">'
}
