const submit = document.querySelector('#button_submit')
const name = document.querySelector('#name')
const msg_welcome = document.querySelector('#msg_welcome')
const form = document.querySelector('form')
const welcome = document.querySelector('#welcome')
const logout = document.querySelector('#logout')


function checkLogin() {
    const user = localStorage.getItem('user')

    if(user) {
        form.style.display = 'none'
        welcome.style.display = 'block'
        msg_welcome.innerHTML = user
    }
    else {
        form.style.display = 'block'
        welcome.style.display = 'none'    
    }
}

submit.addEventListener('click', (evt) => {
    localStorage.setItem('user', name.value)
    checkLogin()
    evt.preventDefault()
})

logout.addEventListener('click', () => {
    localStorage.removeItem('user')
    form.style.display = 'block'
    welcome.style.display = 'none'
})

checkLogin()