function truncateString(str, num) {
    let arr = [];
    
    for(let c = 0; c < num; c++) {
        arr.push(str[c])
    };

    arr.length < str.length ? str = arr.join('') + '...' : str = arr.join('')
    return str;
  }
  
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));