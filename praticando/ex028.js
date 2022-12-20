let array = [1,5,3,2,6,9,7,8]

const elementfind = array.find((element, index) => {
    if (element == 2) {
        console.log(`Elemento ${element} encontrado na posição ${index}`)
        return element
    }
})
elementfind
console.log(elementfind)