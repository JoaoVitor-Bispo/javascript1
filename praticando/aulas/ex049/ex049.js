const posx = document.querySelector('#posx')
const posy = document.querySelector('#posy')
const height = document.querySelector('#height')
const width = document.querySelector('#width')
const square1 = document.querySelector('#square1')
const square2 = document.querySelector('#square2')

let sq1 = square1.getBoundingClientRect()
let sq2 = square2.getBoundingClientRect()

square1.accessKey = '1'
square2.accessKey = '2'


square1.addEventListener('click', () => {
    posx.innerHTML = `posx: ${sq1.x}`
    posy.innerHTML = `posy: ${sq1.y}`
    height.innerHTML = `height: ${sq1.height}`
    width.innerHTML = `width: ${sq1.width}`
})

square2.addEventListener('click', () => {
    posx.innerHTML = `posx: ${sq2.x}`
    posy.innerHTML = `posy: ${sq2.y}`
    height.innerHTML = `height: ${sq2.height}`
    width.innerHTML = `width: ${sq2.width}`
})