var pessoa = {};
pessoa.nome = 'jaozada';
pessoa.idade = 15;
pessoa.sexo = 'masculino';
pessoa.casado = false;

console.log(pessoa)
console.log(pessoa.hasOwnProperty("idade"))
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
for (prop in pessoa) {
    console.log(prop)
    console.log(pessoa[prop])

}