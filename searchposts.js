const apiUrl = 'https://api.noroff.dev';

document.getElementById('searchButton').addEventListener('click', searchPosts);

async function fetchPosts() {
    try {
        const response = await fetch(`${apiUrl}/posts`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

function renderPosts(posts) {
    const contentFeed = document.getElementById('contentFeed');
    contentFeed.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        `;
        contentFeed.appendChild(postElement);
    });
}

async function searchPosts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const posts = await fetchPosts();

    const filteredPosts = posts.filter(post => {
        return post.title.toLowerCase().includes(searchTerm) || post.content.toLowerCase().includes(searchTerm);
    });

    renderPosts(filteredPosts);
}

fetchPosts().then(posts => renderPosts(posts.slice(0, 3)));
