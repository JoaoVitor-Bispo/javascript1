const name1 = document.querySelector('#name')
const grade = document.querySelector('#grade')
const message = document.querySelector("#message")

document.querySelector('button').addEventListener('click', () => {
    if (!grade.checkValidity()) {
        message.innerHTML = grade.validity.valueMissing
    }
})