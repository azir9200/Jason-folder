function loadPost() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(posts => myDispaly(posts))
}
function myDispaly(posts) {
  //const postContainer = document.getElementById('main-containe');
  for (const post of posts) {
    console.log(post.name)
    // const postDiv = document.createElement('div');
    // postDiv.innerHTML = `
    // <h4>Users-</h4>
    // <h5> Post: title </h5>
    // <p> Post Description </p>
    // `;
    // postContainer.appendChild(postDiv);
  }
}

loadPost()

