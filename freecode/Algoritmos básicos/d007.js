function repeatStringNumTimes(str, num) {
    const arr = [];
    for(let c = 0; c < num; c++) {
        arr.push(str)
    };
    return arr.join('');
  }
  
console.log(repeatStringNumTimes("abc", 3));