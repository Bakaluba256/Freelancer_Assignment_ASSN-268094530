// Task 2: Fetch posts from JSONPlaceholder API
const fetchPostsBtn = document.getElementById('fetchPostsBtn');
const postList = document.getElementById('postList');

fetchPostsBtn.addEventListener('click', async () => {
  try {
    // Fetch data from API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    // Clear previous posts
    postList.innerHTML = '';

    // Display first 10 posts
    posts.slice(0, 10).forEach(post => {
      const li = document.createElement('li');
      li.textContent = `${post.title} - ${post.body}`;
      postList.appendChild(li);
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
});