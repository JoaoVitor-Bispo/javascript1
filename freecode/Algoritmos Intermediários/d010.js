function uniteUnique(...arr) {
  const newArr = []
  let soma = 0
  const aa = []

  arr.forEach((element) => newArr.push(...element))

  newArr.filter((element, index) => {
    console.log(newArr.indexOf())
  })
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);