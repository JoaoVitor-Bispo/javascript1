function factorialize(num) {
    if(num === 0) {
        num = 1
    };

    let c = 1;
    const newArr = [];

    while(c <= num) {
        newArr.push(c)
        c++
    }
    num = newArr.reduce((ant, pos) => ant * pos)

    return num;
  }
  
console.log(factorialize(5));