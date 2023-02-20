const player = document.querySelector('#player')
const right = document.querySelector('#right')
const left = document.querySelector('#left')
const stop_Interval = document.querySelector('#stop')

window.onload = (() => {
    player.style.cssText = `position: relative; left: 0px; width: 60px`
    size = window.innerWidth - parseInt(player.style.width)
})

let size = null
let cancel = null

const move = (direction) => {
    console.log(direction)
    let position = parseInt(player.style.left)
    position += (10 * direction)
    player.style.left = `${position}px`  
    if (direction < 0) {
        if (position <= 0) {
            player.style.left = `${position}px`
            clearInterval(cancel)
        }
    }
    else {
        if (position >= size) {
            clearInterval(cancel)
        }
    }
}

right.addEventListener('click', (evt) => {
    clearInterval(cancel)
    cancel = setInterval(move, 20, 1)
})

left.addEventListener('click', (evt) => {
    clearInterval(cancel)
    cancel = setInterval(move, 20, -1)
})

stop_Interval.addEventListener('click', function() {
    clearInterval(cancel)
})

window.onresize = () => {
    size = window.innerWidth - parseInt(player.style.width)
}


