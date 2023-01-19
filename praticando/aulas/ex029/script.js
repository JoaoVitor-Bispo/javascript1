const array = document.querySelector("#array")
const search = document.querySelector("#btnPesquisar")
const result = document.querySelector("#resultado")
const input = document.querySelector("#txt_pesquisar")
const elementsarray = [1,5,3,1,7,8,9,6,15,12]

array.innerHTML = "["+elementsarray+"]"

search.addEventListener('click', () => {
    const ret = elementsarray.find((el,i) => {
        if (el == input.value) {
            result.innerHTML = `Elemento ${el} encontrado na posição ${i+1}`
            return el
        }
    })    
    console.log(ret)      
})

