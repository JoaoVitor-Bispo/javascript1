// localStorage.setItem('Name', 'Jao')
// localStorage.setItem('Age', 20)

const name = localStorage.getItem('Name')
const age = localStorage.getItem('Age')

window.alert(`Hello ${name}, You are ${age} years old, right?`)

if (!localStorage.getItem('sobrenome')) {
    console.log('Não tem sobrenome!')
}

console.log(typeof localStorage)

//O dado vira uma string.
console.log(typeof age)


//session storage
sessionStorage.setItem('number', 1)
const number = sessionStorage.getItem('number')

console.log(number)

//Salvando um objeto em localStorage
const person = {
    name: 'Diana',
    age: 15,
    city: 'Hollywood'
}

// localStorage.setItem('person', person)

localStorage.setItem('person', JSON.stringify(person))
