function findLongestWordLength(str) {
    str = str.split(' ').reduce((ant, pos) => ant.length > pos.length ? ant : pos);
    return str.length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");