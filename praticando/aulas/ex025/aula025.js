let box = document.querySelector(".conteiner")
let c1 = document.querySelector("#c1") 
let cursos = [...document.querySelectorAll(".curso")]

box.addEventListener("click", (evt)=>{
    console.log("clicou")
    console.log(evt)
})

// c1.addEventListener('click', (evt) => {
//     evt.stopPropagation()
// })
cursos.map((el) => {
    el.addEventListener('click', (ev) => {
        ev.stopPropagation()
    })
})