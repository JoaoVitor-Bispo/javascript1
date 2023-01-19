const caixaCursos=document.querySelector("#caixaCursos")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursos=["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]
const btnCursoSelecionado=document.getElementById("btnCursoSelecionado")
const removeCurso = document.querySelector('#caixaRemoverCurso')
const addCurso = document.querySelector('#btnAdicionarNovoCurso')
const nomeCurso = document.querySelector('#nomeCurso')

cursos.map((el, i) => {
    let cursosdiv = document.createElement('div')
    cursosdiv.setAttribute("id","c"+i)
    cursosdiv.setAttribute("class","curso c1")
    cursosdiv.innerHTML = el
    caixaCursos.appendChild(cursosdiv)

    const comandos=document.createElement("div")
    comandos.setAttribute("class","comandos")
    
    const rb=document.createElement("input")
    rb.setAttribute("type","radio")
    rb.setAttribute("name","rb_curso")

    comandos.appendChild(rb)

    cursosdiv.appendChild(comandos)
})

const cursoselected = () => {
    const allradios = [...document.querySelectorAll('input[type=radio]')]
    const radioselect = allradios.filter((el) => {
        if (el.checked) {
            return el
        }
    })
    return radioselect[0]
}

btnCursoSelecionado.addEventListener('click', () => {
    const elementselected = cursoselected()
    window.alert('Curso selecionado: ' + elementselected.parentNode.previousSibling.textContent)
})
removeCurso.addEventListener('click', () => {
    const elementselected = cursoselected()
    elementselected.parentNode.parentElement.remove()
})

addCurso.addEventListener('click', () => {
    if (nomeCurso.value.length == 0) {
        window.alert('Adicione o nome de um curso para adicioná-lo.')
    }
    else {
        const nomeCursoElement = document.createElement('div')
        nomeCursoElement.textContent = nomeCurso.value
        nomeCursoElement.setAttribute("class","curso c1")

        const comandos=document.createElement("div")
        comandos.setAttribute("class","comandos")
        
        const rb=document.createElement("input")
        rb.setAttribute("type","radio")
        rb.setAttribute("name","rb_curso")
    
        comandos.appendChild(rb)
    
        nomeCursoElement.appendChild(comandos)
        caixaCursos.appendChild(nomeCursoElement)
    }
    console.log(cursos)
})
