function mutation(arr) {
    arr[0] = arr[0].toLowerCase()
    arr[1] = arr[1].toLowerCase()

    for(let c in arr[1]) {
        if(arr[0].indexOf(arr[1][c]) == -1) {
            arr = false;
            return arr;
        };
    };
    
    if(arr) {
        arr = true;
    }
    return arr;
  }
  
  mutation(["hello", "hel"]);