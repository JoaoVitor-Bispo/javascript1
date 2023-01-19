const items = [...document.querySelectorAll('.elements')]
let button = document.querySelector('#button1')
let box = document.querySelector('#c1')
let box2 = document.querySelector('#c2')

items.map((el) => {
    el.addEventListener('click', (x) => {
        x.target.classList.toggle('selected')
    })
    button.addEventListener('click', () => {
        if (el.getAttribute('class') == 'elements selected') {
            if(el.parentNode == box) {
                box2.appendChild(el)
            }
            else {
                box.appendChild(el)
            }
        }
    })
})
