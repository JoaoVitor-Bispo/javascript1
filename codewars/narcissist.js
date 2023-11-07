function narcissistic(value) {
    if(value <= 0) return false

    const raised = String(value).split('');

    const raisedNumbers = raised.map(element => Number(element) ** raised.length);

    const sumOfAllNumbers = raisedNumbers.reduce((before, after) => before + after);

    return sumOfAllNumbers == value
}

console.log(narcissistic(153));