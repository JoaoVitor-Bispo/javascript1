function chunkArrayInGroups(arr, size) {
    let c = 0;
    let index = 0;
    const newArr = [];
    for(let i = 1; i <= Math.round(arr.length / size); i++) {
        newArr.push([]);
    };
    while(c <= (arr.length - 1)) {
        console.log(c)
        newArr[index].push(arr[c])
        if(c % size === 0) {
            index++;
        };
        c++;
    };
    console.log(newArr);
};
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);