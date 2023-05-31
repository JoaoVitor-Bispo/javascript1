function titleCase(str) {
    str = str.toLowerCase();
    const split = str.split(' ');
    const array = [];
    
    for(let c in split) {
        array.push(split[c]);
    };
    

    for(let c in array) {
        array[c].charAt(0).toUpperCase()
        console.log(array)
    };
    console.log(array)
    return str;
  }
  
  titleCase("sHoRt AnD sToUt");