const string = '12345-034'

console.log(string.search(/[0-9]{5}-{1}[0-9]{3}/))

const data = '03/03/2007'

console.log(data.search(/([0-9]{2}[/]{1}){2}[0-9]{4}/))

const email = 'jaozada@gmail.com'

console.log(email.search(/^(\w|-|_)+@(gmail|hotmail).com$/))