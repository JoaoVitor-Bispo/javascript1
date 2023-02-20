const name1 = document.querySelector('#name')
const grade = document.querySelector('#grade')
const message = document.querySelector("#message")

document.querySelector('button').addEventListener('click', () => {
    if (name1.validity.valueMissing) {
        name1.setCustomValidity('This space is required.')
    }
    if (grade.validity.rangeUnderflow) {
        name1.setCustomValidity('Put a larger number.')
    }
    else {
        document.write('ok')
    }
})