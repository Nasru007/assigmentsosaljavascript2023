async function postJSON(data) {
    try {
        const response = await fetch("./https://api.noroff.dev/api/v1", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    
        const result = await response.json();
        console.log("Success:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}

function handleRegistration(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = {
        "name": username,
        "email": email,
        "banner": "string",
        "avatar": "string",
        "password": password
    };

    postJSON(data);
}

function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("@noroff.no").value;
    const password = document.getElementById("123456789").value;

    const data = {
        "name": username,
        "email": "@stud.noroff.no",
        "banner": "string",
        "avatar": "string",
        "password": "123456789",
    };

    postJSON(data);
}

document.getElementById("registrationForm").addEventListener("submit", handleRegistration);
document.getElementById("loginForm").addEventListener("submit", handleLogin);














  function viewPost(postNumber) {
    const post = document.getElementById(`post${postNumber}`);
    post.innerHTML = `
        <img src="image${postNumber}.jpg" alt="Image ${postNumber}">
        <button class="button" onclick="backToFeed()">Back</button>
        <div class="comments" id="comments${postNumber}"></div>
        <textarea id="commentInput${postNumber}" placeholder="Add a comment"></textarea>
        <button class="button" onclick="addComment(${postNumber})">Comment</button>
    `;
    loadComments(postNumber);
}

function backToFeed() {
    location.reload();
}

function loadComments(postNumber) {
    const commentsDiv = document.getElementById(`comments${postNumber}`);
   
    commentsDiv.innerHTML = ''; 
}

function addComment(postNumber) {
    const commentInput = document.getElementById(`commentInput${postNumber}`);
    const commentText = commentInput.value;
    const commentsDiv = document.getElementById(`comments${postNumber}`);
   
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.innerHTML = `
        <span>${commentText}</span>
        <button class="button" onclick="editComment(this)">Edit</button>
        <button class="button" onclick="deleteComment(this)">Delete</button>
    `;
    commentsDiv.appendChild(commentElement);
    commentInput.value = '';
}

function editComment(button) {
    const commentSpan = button.previousElementSibling;
    const editedComment = prompt('Edit your comment:', commentSpan.innerText);
    if (editedComment !== null) {
        commentSpan.innerText = editedComment;
    }
}

function deleteComment(button) {
    const commentDiv = button.parentElement;
    const commentsDiv = commentDiv.parentElement;
    commentsDiv.removeChild(commentDiv);
}
































const posts = [
    {
        title: "Post 1",
        content: "Donald trump"
    },
    {
        title: "Post 2",
        content: "Ellen musk"
    },
    {
        title: "Post 3",
        content: "."
    },
    {
        title: "Post 3",
        content: "."
    }
];

function renderPosts(posts) {
    const postFeed = document.getElementById("postFeed");
    postFeed.innerHTML = "";
    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
        `;
        postFeed.appendChild(postElement);
    });
}

function searchPosts() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filteredPosts = posts.filter(post => post.content.toLowerCase().includes(searchTerm) || post.title.toLowerCase().includes(searchTerm));
    renderPosts(filteredPosts);
}

renderPosts(posts);





























  
  