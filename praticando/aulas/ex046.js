const string = '12341-0391, 0911-436, 06311-071'
const regEx = /[0-9]{5}[-]{1}[0-9]{3}/g

console.log(regEx.test(string))

console.log(string.match(regEx))

console.log(string.split(regEx))

console.log(string.replace(regEx, 'teste'))
