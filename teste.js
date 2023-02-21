const regEx = /^\w{4,10}(@gmail.com|@hotmail.com){1}/gi

// const loginUser = (email, senha, callback, error) => {
//     setTimeout(() => {
//         if (regEx.test(email)) {
//             callback({email, senha})
//         }
//         else {
//             error("Login can't be realized")
//         }
//     }, 1500)
// }

// const getUserVideos = (email, callback) => {
//     setTimeout(() => {
//         callback(['video1', 'video2', 'video3'])
//     }, 2000)
// }

// const getVideoDetails = (video, callback) => {
//     setTimeout(() => {
//         callback({video, title:'teste'})
//     }, 2500)
// }

// const user = loginUser('Jaozada@gmail.com', '12345',
// (user) => {
//     console.log({user})
//     getUserVideos(user.email, (videos) => {
//         console.log({videos})
//         getVideoDetails(videos[0], (videosDetails) => {
//             console.log({videosDetails})
//         })
//     })
// }, (error) => {
//     throw new Error(error)
// })

const loginUser = (email, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (regEx.test(email)) {
                resolve({email, senha})
            }
        },1500)
    })
}

const getUserVideos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(['video1', 'video2', 'video3'])
        reject('Algo deu errado')
    }, 2000)
})

const getVideoDetails = (video) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({video, title:'test'})
        },2500)
    })
}

const user = loginUser('Jaozada@gmail.com', '12345')
    .then((user) => {
        console.log({user})
        return getUserVideos
    })
    .then((videos) => {
        console.log({videos})
        return getVideoDetails(videos[0])
    })
    .then((videoDetails) => {
        console.log({videoDetails})
    })