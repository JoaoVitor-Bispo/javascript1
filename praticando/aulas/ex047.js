const archives = [
    'Attention.jpg',
    'PHOTO.jpg',
    'My cat.jpg',
    'My cat.JPG',
    'My cat.JPEG',
    'HUSBAND.png',
    'shopping list.txt'
]

// const regEx = /.jpeg|jpg/gi
const string = 'aaa.jpeg-'
const regEx = /.jpe?g/gi

console.log(string.match(regEx))

for (let archive of archives) {
    console.log(archive, archive.match(regEx))
}

