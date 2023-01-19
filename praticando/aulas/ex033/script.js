const array = document.querySelector("#array")
const verify = document.querySelector("#btnVerificar")
const result = document.querySelector("#resultado")
const elementsarray = [6,8,17,10,7,8,9,6,15,12]

array.innerHTML = "["+elementsarray+"]"

verify.addEventListener('click', () => {
    const ret = elementsarray.some((el,i) => {
            return el < 5
    })    
    if (ret) {
        result.innerHTML = `Array todo OK`
    }
    else {
        result.innerHTML = `Array não está OK`
    }
})

