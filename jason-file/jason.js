function loadPost() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayData(data))
}

function displayData(data) {
  const postContainer = document.getElementById('posts-container')
  for (const post of data) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    console.log(post);
    postDiv.innerHTML = ` 
    <h4>Users-${post.userId} </h4>
    <h5>Post: ${post.title} </h5>
    <p>Post Description :: ${post.body} </p>
    console.log(data);
    `;
    postContainer.appendChild(postDiv);
  }

}
loadPost();