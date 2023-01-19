const f = (a,b) => a + b;
console.log(f(5,4));

const af = a => a+5;
console.log(af(10));

const afn = () => console.log('test')
console.log(afn())

const afb = (a,b) => {
    let res = a + b
    return res
}
console.log(afb(10,10))
