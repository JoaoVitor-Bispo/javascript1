const url = 'https://cfbcursos.repl.co'

const temp = document.querySelector('#temperature')
const nivel = document.querySelector('#nivel')
const pressure = document.querySelector('#pressure')


function getInfo() {
    const request = fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        const array = [data]
        array.map((element) => {
            temp.innerHTML = 'Temperature: ' + element.temperatura;
            nivel.innerHTML = 'Nivel: ' + element.nivel;
            pressure.innerHTML = 'Pressure: ' + element.pressao;
        })
    })
    .catch((error) => console.log(error))
}

setInterval(() => getInfo(), 2500)