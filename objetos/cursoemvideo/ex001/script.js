class Carro {
    constructor(nome, portas) {
        this.Nome = nome
        this.Portas = portas
        this.Ligado = false
        this.Cor = undefined
        this.Blindagem = undefined
        this.Muniçao = undefined
    }
    ligar() {
        this.Ligado = true
    }
    desligar() {
        this.Ligado = false
    }
    set setcor(newcor) {
        this.Cor = newcor
    }
}
class Militar extends Carro {
    constructor(nome, portas,blindagem, municao) {
        super(nome, portas)
        this.Blindagem = blindagem
        this.Cor = 'verde'
        this.Muniçao = municao
    }
}
let tipo = document.getElementsByName('radiotipo')
let nome = document.querySelector('#nome')
let portas = document.querySelector('#portas')
let blindagem = document.querySelector('#blindagem')
let muniçao = document.querySelector('#municao')
let conteiner = document.querySelector('#conteiner')

tipo[0].addEventListener('click', () => {
    blindagem.removeAttribute('disabled')
    muniçao.removeAttribute('disabled')
})

tipo[1].addEventListener('click', () => {
    blindagem.value = 0
    muniçao.value = 0
    blindagem.setAttribute('disabled', 'disabled')
    muniçao.setAttribute ('disabled', 'disabled')
})



function adicionar() {
    let infos = document.createElement('p')
    infos.id = 'paragfilho'
    if (nome.value.length == 0 || portas.value.length == 0) {
        window.alert('Defina o nome e a quantidade de portas do seu carro corretamente.')
    }
    else {
        conteiner.appendChild(infos)
        if (tipo[1].checked) {
            let carro = new Carro(nome.value, portas.value)
            for (var k in carro) {
                infos.innerHTML += `${k}: ${carro[k]}<br>`
            }
        }
        else if (tipo[0].checked) {
            let carro = new Militar(nome.value, portas.value, muniçao.value, blindagem.value)
            for (var k in carro) {
                infos.innerHTML += `${k}: ${carro[k]}<br>`
            }
        }
        let remover = document.createElement('button')
        remover.id = 'botaoremover'
        remover.textContent = 'Remover'
        infos.insertAdjacentElement("beforeend", remover)
        remover.onclick = () => {
            infos.remove(parent)
        }
    }
}