const player = document.querySelector('#player')
const right = document.querySelector('#right')
const left = document.querySelector('#left')
const stop_Interval = document.querySelector('#stop')

window.onload = (() => {
    player.style.cssText = `position: relative; left: 0px;`
})

let cancel = null

right.addEventListener('click', (evt) => {
    clearInterval(cancel)
    cancel = setInterval(() => {
        let position = parseInt(player.style.left)
        position += 10
        player.style.left = `${position}px`  
        console.log(player.style.left)  
    }, 20)
})

left.addEventListener('click', (evt) => {
    clearInterval(cancel)
    cancel = setInterval(() => {
        let position = parseInt(player.style.left)
        position -= 10
        player.style.left = `${position}px`  
        console.log(player.style.left)  
    }, 20)
})

stop_Interval.addEventListener('click', function() {
    clearInterval(cancel)
})


