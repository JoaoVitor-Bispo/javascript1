function bouncer(arr) {
    arr = arr.filter((element, index) => {
      return Boolean(element) !== false;
    })
    return arr;
  }
  
  bouncer([7, "ate", "", false, 9, null, 0]);