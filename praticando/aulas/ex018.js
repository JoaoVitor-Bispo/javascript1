const recebe_param = (...valores) => {
    let res = 0
    let c = 0
    function somar(val) {
        while (c < val.length) {
            res += val[c]
            c++
        }
        return res
    }
    return somar(valores)
}
console.log(recebe_param(2,2,3,5,10))
