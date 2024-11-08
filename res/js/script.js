/*
const endpointUrl = 'https://dummyjson.com/c/f22c-c3b9-4620-902f';



async function fetchPosts() { //Fetching
    try {
        const response = await fetch(endpointUrl);
        const jsonData = await response.json();
        const posts = jsonData; 
        displayPosts(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}
*/

// fetch posts from json file in folder
async function fetchPosts() {
    fetch('res/json/info.json')
        .then(response => response.json())
        .then(posts => {
          displayPosts(posts);
        })
  } 

function displayPosts(posts) {
    const postList = document.querySelector('.post-list');
    postList.innerHTML = ''; // Clear current posts

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        // Post header with profile picture and date
        const headerElement = document.createElement('h2');
        const profileImg = document.createElement('img');
        profileImg.src = post.profile_picture || 'res/images/me.png'; //def profile image
        headerElement.appendChild(profileImg);

        const dateElement = document.createElement('span');
        dateElement.innerText = post.created || 'Unknown Date'; 
        headerElement.appendChild(dateElement);
        postElement.appendChild(headerElement);

        // Post image (optional)
        if (post.photo) { 
            const textElement = document.createElement('p'); 
            const imgElement = document.createElement('img'); 
            imgElement.src = post.photo; 
            imgElement.alt = 'Post Image'; 
            imgElement.classList.add('post-image');
            
        
            textElement.appendChild(imgElement);
            postElement.appendChild(textElement);
        }


        // Post text content
        const textElement = document.createElement('p');
        textElement.innerText = post.comment || 'No content available';
        postElement.appendChild(textElement); 

        // Like button
        const likeButton = document.createElement('img');
        likeButton.src = 'res/images/like2.png';
        likeButton.alt = 'Like';
        likeButton.classList.add('like-button');
        postElement.appendChild(likeButton);

        // Append the post to the post list
        postList.appendChild(postElement);
    });
}

// Fetch posts on page load
document.addEventListener('DOMContentLoaded', fetchPosts);

document.addEventListener("DOMContentLoaded", function () {
    const profileImage = document.getElementById("profileImage");
    const dropdownMenu = document.getElementById("dropdownMenu");

    profileImage.addEventListener("click", function () {
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    window.addEventListener("click", function (event) {
        if (!profileImage.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });
});
