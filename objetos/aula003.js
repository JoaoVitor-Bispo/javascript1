var Mostrarnome = function(a,b) {
    var args = arguments.length;
    while (args > 0) {
        var nomecompleto = arguments[args - 1];
        console.log(nomecompleto)
        args--;
    }
}
Mostrarnome('João','Vitor','Bispo')