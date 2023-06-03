function largestOfFour(arr) {
    arr = arr.map((element, index) => element.reduce((ant, pos) => ant > pos ? ant : pos))
    return arr;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);