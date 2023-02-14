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
const regEx = /.jpe?g/gi

for (let archive of archives) {
    console.log(archive, archive.match(regEx))
}

