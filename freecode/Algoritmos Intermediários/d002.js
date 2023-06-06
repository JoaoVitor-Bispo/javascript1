function diffArray(arr1, arr2) {
  
  const iterator1 = arr1.filter((element, index) => arr2.indexOf(element) === -1);
  const iterator2 = arr2.filter((element, index) => arr1.indexOf(element) === -1);
  
  const newArr = [...iterator1, ...iterator2];
  console.log(newArr);
  
  return newArr;  
};
  
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);