const loginUser = ((email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false
            if(error) {
                reject(new Error('Login cannot be executed.'))
            }
            resolve({email, password})
        }, 1500)

        })
    })

const testAsync = async () => {
    const resolve = await loginUser('teste@gmail.com', '12345');
    return resolve
};


const getUserVideos = (email) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ email : {videos: ['video1', 'video2', 'video3']}})
                reject(new Error('Videos inacessíveis'))
            }, 2500)
        })
}

testAsync()
.then(response => getUserVideos(response.email)
.then(data => console.log(data)))

// .then(videos => {console.log({data.email: videos})})
// .catch(error => console.log(error))


// const loginUser = ((email, password) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const error = false
//             if (error) {
//                 reject(new Error('Login cannot be executed.'))
//             }
//             resolve({email, password})
//         }, 1500)
//         })
// })

// const getUserVideos = (email) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({email, videos:['video1', 'video2', 'video3']})
//             reject(new Error('0 Vídeos found.'))
//         }, 2000)
//     })
// }

// const getVideoDetails = (video) => {
//     return new Promise((resolve, reject) => {
//         resolve({video, details: 'video title'})
//     })
// }

// loginUser('Jaozada@gmail.com', '12345')
//     .then(user => getUserVideos(user.email))
//         .then((videos) => getVideoDetails(videos.videos[0]))
//             .then((videoDetails) => console.log(videoDetails))
//     .catch((error) => console.log(error))
