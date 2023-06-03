function titleCase(str) {

    str = str.toLowerCase();

    let split = str.split(' ');
    let array = [];
    
    for(let c in split) {
        array.push(split[c]);
    };
    
    array = array.map((element, index) => element.toUpperCase());

    for(let c in array) {
        split[c] = split[c].replace(split[c][0], array[c][0]);
    };

    return split.join(' ');
  }
  
cotitleCase("sHoRt AnD sToUt");