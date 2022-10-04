const loadUser = () => {
    fetch('https://randomuser.me/api/?results=5000')
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}
const displayUsers = (users)=> {
    const userContainer = document.getElementById('user-container');
    for(const user of users){
        // console.log(user.name.first);
        const div = document.createElement('div');
        div.classList.add('user-container')
        div.innerHTML = `
        <img src='${user.picture.thumbnail}'>
        <h2>${user.name.first} ${user.name.last}</h2>
        <p>${user.location.city}</p>
        <h4>Email ${user.email} </h4>
        <h5>Phone ${user.cell}</h5>
    
        `
        userContainer.appendChild(div)
    }
}

loadUser();