
const create_button = nome => {
    return new Promise((resolve, reject) => {
        let error = true
        setTimeout(() => {
            let button = document.createElement('button')
            button.innerHTML = nome
            if (error) {
                reject(new Error('Not was possible generate a button'))  
            }
            document.documentElement.appendChild(button)
            resolve(button)
        }, 2000)
    })
}

create_button('Login')
    .then(value => value.style.cssText = `background-color: red; color: white`)
    .catch(error => document.write(error))

// create_button('Sign out')
//     .then(value => value.style.cssText = `background-color: black; color: green`)
//     .catch(error => document.write(error))

