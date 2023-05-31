function frankenSplice(arr1, arr2, n) {

    let newArr = [];
    let c = 0;

    while(c < n) {
        newArr.push(arr2[c]);
        c++;
    };
    
    newArr = [...newArr, ...arr1];
    
    for(let i in arr2) {
        if (newArr.indexOf(arr2[i]) === -1) {
            newArr.push(arr2[i]);
        };
    };

    return newArr;
};
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);