function getCount(str) {
  
    const vowel = ['a', 'e', 'i', 'o', 'u']
    
    const vowelQuantity = str.split('').filter(letters => vowel.indexOf(letters.toLowerCase()) !== -1)
    
    return vowelQuantity.length;
}

console.log(getCount('One more test just to get assurance'))