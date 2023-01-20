const getUserVideos = (email, callback) => {
    const videos = ['video1', 'video2', 'video3'];
    setTimeout(() => {
        callback(videos);
    }, 2000);
}

const getVideoDetails = (video, callback) => {
    setTimeout(() => {
        callback({video, details: 'video title'});
    }, 2500)
}

const loginUser = (email, password, callback, onError, userLogged) => {
    const error = false;
    setTimeout(() => {
        if (!error) {
            callback({email, password});
        }
        else {
            console.log('Login not was executed')
        }
    }, 1500);
}


const user = loginUser('Jaozada@gmail.com', '12345',
(user) => {
    console.log({user})
    getUserVideos(user.email, (videos) => {
        console.log({videos})
        getVideoDetails(videos[0], (details) => {
            console.log(details);
        });
    });
}, 
(error) => {
    throw new Error(error)
});