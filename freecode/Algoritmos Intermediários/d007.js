function myReplace(str, before, after) {
    let corte = str.split(' ');
    for(let c in corte) {
        if (corte[c] === before) {
            corte[c] = after
        }
    }
    return corte.join(' ');
}
  
console.log(myReplace("I think we should look up there", "up", "Down"))