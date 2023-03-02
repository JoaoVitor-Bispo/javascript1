const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector('#loading');
const posts = document.querySelector('#posts-container');
const areaPost = document.querySelector('#post');
const postContent = document.querySelector('#post-container');
const areaComments = document.querySelector('#comments-container');
const email = document.querySelector('#email');
const comment = document.querySelector('#body');
const submit = document.querySelector('#submit');
const regEx = /^\w+(@gmail.com){1}/gi;


const urlSearch = new URLSearchParams(window.location.search);
const urlID = urlSearch.get('id');

function getPosts() {
    const teste = fetch(url)
    .then(response => response.json())
    .then(data => {
        loadingElement.classList.add('hide');

        console.log(data);

        data.map((element) => {
            const div = document.createElement('div');
            const title = document.createElement('h2');
            const body = document.createElement('p');
            const link = document.createElement('a');
            
            title.innerHTML = element.title;
            body.innerHTML = element.body;
            link.innerHTML = 'Read';

            div.appendChild(title);
            div.appendChild(body);
            div.appendChild(link);
            posts.appendChild(div)

            link.setAttribute('href', `./post.html?id=${element.id}`);

        })
    })
}

function postInterface() {
    const post = fetch(`${url}/${urlID}`)
    .then(response => response.json())
    .then(data => {
            loadingElement.classList.add('hide');
            areaPost.classList.toggle('hide');

            const title = document.createElement('h2');
            const body = document.createElement('p');

            title.innerHTML = data.title;
            body.innerHTML = data.body;

            postContent.appendChild(title);
            postContent.appendChild(body);

    const comments = fetch(`${url}/${urlID}/comments`)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        data.forEach((element) => {
            const title = document.createElement('h3');
            const body = document.createElement('p');

            title.innerHTML = element.email;
            body.innerHTML = element.body;

            areaComments.appendChild(title);
            areaComments.appendChild(body);

        })
    })
    })
}

function newComment(param) {
    const getComment = fetch(`${url}/${urlID}/comments`, {
        method: 'POST',
        body: JSON.stringify(param),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {

        const div = document.createElement('div');
        const title = document.createElement('h3');
        const body = document.createElement('p');

        title.innerHTML = data.email
        body.innerHTML = data.body

        areaComments.appendChild(title);
        areaComments.appendChild(body);
    })
    .catch(error => console.log(error));
}

if (!urlID) {
    getPosts();
}
else {
    postInterface();
    submit.addEventListener('click', (evt) => {
    if (email.value.match(regEx) && comment.value.length > 0) {
        let vnewComment = {
            email: email.value,
            body: comment.value
        };
        newComment(vnewComment);
    }
    evt.preventDefault();
    })
}