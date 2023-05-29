function chunkArrayInGroups(arr, size) {

    const newArr = [];

    for(let c = 1;c <= arr.length;c++) {
        let i = 0
        if(c % size == 0) {
            const teste = arr;
            newArr.push(arr.slice(i, c));
            i += c;
        };
    };
    console.log(newArr);
};
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);