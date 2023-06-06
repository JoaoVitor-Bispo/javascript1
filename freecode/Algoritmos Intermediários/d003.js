function destroyer(arr, ...nums) {

    let newArr = [];
    
    for(let c in nums) {
        arr = arr.reduce((element, pos, index) => {
            if(pos == nums[c]) {
                arr[index] = '';
            };
            return arr;
        }, 0);
    };

    for(let c in arr) {
        if(arr[c] !== '') {
            newArr.push(arr[c]);
        };
    };
    return newArr;
}
  
destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan");
