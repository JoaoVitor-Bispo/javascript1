function gerar() {
    var num1 = window.document.getElementById('numb')
    var tabu = window.document.getElementById('tab')
    if (num1.value.length == 0) {
        window.alert('Por favor, digite um número.')
    }
    else {
        var num = Number(num1.value)
        tabu.innerHTML = ''
        for (var c = 0;c <= 10;c++) {
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            tabu.appendChild(item)
        }    
    }
}
