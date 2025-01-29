async function fetchPosts() {
    try {
        const response = await fetch('http://localhost:5000/posts'); // Ensure the URL matches your backend
        const posts = await response.json();
        const postsContainer = document.getElementById('posts'); // Assuming you have a div with this ID
        postsContainer.innerHTML = ''; // Clear existing posts
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.textContent = post.content;
            postsContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

async function createPost(postData) {
    try {
        const response = await fetch('http://localhost:5000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });
        const newPost = await response.json();
        fetchPosts(); // Refresh the posts after creating a new one
    } catch (error) {
        console.error('Error creating post:', error);
    }
}

// Call fetchPosts on page load
window.onload = fetchPosts;
