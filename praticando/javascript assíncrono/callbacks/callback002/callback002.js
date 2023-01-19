const myFunc = function(name, callback, error) {
   const element =  document.createElement('button')
   setTimeout(() => {
      document.documentElement.insertAdjacentElement("beforeend", element)
      element.innerHTML = name
      callback(element)
   }, 2000)
}

myFunc('Login', (button) => {
   button.style.cssText = `font-size: 50px;`
})

myFunc('Sign up', (button) => {
   button.style.cssText = `font-size: 30px;
   background-Color: red;
   color: white`
   button.addEventListener('click', (evt) => {
      console.log('oi')
   })
})