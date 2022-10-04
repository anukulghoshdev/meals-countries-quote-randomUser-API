function loadData2() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}

// video 32_4

function loadUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(res => res.json())
        .then(data => displayUsers(data))
}


function displayUsers(data) {
    // console.log(data);
}

//----------------------------------------------

// video 32_5

function loadUsers2() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
        .then(res => res.json())
        .then(data => displayUsers2(data))
}

function displayUsers2(users) {
    const userList = document.getElementById('user-list');
    for (const user of users) {
        const li = document.createElement('li');
        li.innerText = user.name;
        userList.appendChild(li);

    }
}

//----------------------------------------------

// video 32_6

function loadPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
        .then(res => res.json())
        .then(posts => displayPosts(posts))
}

function displayPosts(posts) { 

    const postContainer = document.getElementById('post-container');

    for (const post of posts) { 
        /* 
        const div = document.createElement('div')

        div.innerHTML = `
        <h6>${post.id}</h6>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `
        postContainer.appendChild (div)
        */

        
        /* 
        const h6 = document.createElement('h6');
        h6.innerText = post.id
        postContainer.appendChild(h6);

        const h3 = document.createElement('h3');
        h3.innerText = post.title;
        postContainer.appendChild(h3);

        const p = document.createElement('p');
        p.innerText = post.body;
        postContainer.appendChild(p)   
        */
       

    }
}
