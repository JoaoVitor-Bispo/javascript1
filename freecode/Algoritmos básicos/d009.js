function findElement(arr, func) {
    let num = 0;
    for(let c in arr) {
        if(func(arr[c])) {
            num = arr[c]
            return num
        }
        else {
            num = undefined
        }
    }
    return num;
}
 

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))