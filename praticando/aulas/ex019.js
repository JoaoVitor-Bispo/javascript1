function* nums() {
    yield 1
    yield 2
    yield 3
}
const iterator = nums()
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)



// console.log(nums().next().value)
// console.log(nums().next().done)