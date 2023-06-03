function sumAll(arr) {

    let newArr = [];

    let maior = arr.reduce((ant, pos) => ant > pos ? ant : pos)
    let menor = arr.reduce((ant, pos) => ant < pos ? ant : pos)

    for(menor; menor <= maior; menor++) {
        newArr.push(menor)
    }

    const result = newArr.reduce((menor, maior) => menor + maior)
    
    return result;
}
  
sumAll([1, 4]);