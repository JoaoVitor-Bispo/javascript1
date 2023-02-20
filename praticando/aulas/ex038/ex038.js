import { ball } from './class.js'

const add = document.querySelector('#add');
const quantity_balls = document.querySelector('#qnt_obj');

add.addEventListener('click', () => {
    for (let c = 0; c < Number(quantity_balls.value) + 1; c++) {
        const classBall = new ball()
        let createball = document.createElement('div')
        createball.className = 'ball'
        createball.style.cssText = `width: ${classBall.size}px; height: ${classBall.size}px; background-color: ${classBall.color}; border-radius: 90%; display: inline-block;`
        document.documentElement.appendChild(createball)
        console.log(classBall.size)
        console.log(classBall.color)
    }
});

