//Dividir e agrupar Arrays

function chunkArrayInGroups(arr, size) {

    const round = (dividend, divisor) => {

        let expression = Math.round(dividend / divisor);

        while(expression < dividend / divisor) {
            expression += .50;
        };
        return Math.round(expression);
    };

    let c = 0;
    let index = 0;
    const newArr = [];

    for(let i = 1; i <= round(arr.length, size); i++) {
        newArr.push([]);
    };
    
    while(c <= arr.length - 1) {
        console.log(newArr);
        if(c % size === 0 && c > 0) {
            index++;
        }
        newArr[index].push(arr[c]);
        c++;
    };
    
    console.log(newArr);
    return newArr;
};
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);