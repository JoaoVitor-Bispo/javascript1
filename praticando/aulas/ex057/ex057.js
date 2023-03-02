const button = document.querySelector('button')
const url = 'https://cfbcursos.repl.co'

const datas = {
    name: 'Sérgio',
    age: 25,
    height: 1.77
}

button.addEventListener('click', () => {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(datas)
    })
    .then(resolve => resolve.json())
    .then(data => console.log(data))
})
