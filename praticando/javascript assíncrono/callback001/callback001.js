const getUserVideos = (email, callback) => {
    const videos = ['video1', 'video2', 'video3'];
    setTimeout(() => {
        callback(videos);
    }, 2000);
}

const getVideoDetails = (video, callback) => {
    callback({details: 'video title'});
}

const loginUser = (email, password, callback, onError, userLogged) => {
    const error = false;
    setTimeout(() => {
        if (error) {
            onError('Login not was executed');
        }
        else {
            console.log(email + ' Logged');
            callback({email});
        }
    }, 2000);
}


const user = loginUser('Jaozada@gmail.com', '12345',
(user) => {
    console.log({user})
    getUserVideos(user.email, (videos) => {
        getVideoDetails(videos[0], (details) => {
            console.log(details);
        });
    });
}, 
(error) => {
    throw new Error(error)
});