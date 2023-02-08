const s1 = Symbol()
const s2 = Symbol()
const s3 = Symbol("jao")
const s4 = Symbol("jao")

console.log(s1 === s2)
console.log(s3 === s4)
console.log(s3.description)
console.log(s4.valueOf())

