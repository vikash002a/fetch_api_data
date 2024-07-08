// Define the URL for the API
const apiUrl = 'https://reqres.in/api/users?page=1';

// Fetch the data from the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Handle the fetched data
    displayUsers(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// Function to display users
function displayUsers(data) {
  const users = data.data;
  const support = data.support;
  const usersContainer = document.getElementById('users');
  
  // Clear previous users
  usersContainer.innerHTML = '';

  // Display each user's information
  users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');

    userDiv.innerHTML = `
      <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
      <div class="user-info">
        <h2>${user.first_name} ${user.last_name}</h2>
        <p>Email: ${user.email}</p>
      </div>
    `;

    usersContainer.appendChild(userDiv);
  });

  // Display support information
  const supportUrl = document.getElementById('support-url');
  const supportText = document.getElementById('support-text');
  supportUrl.href = support.url;
  supportUrl.textContent = 'Support Us';
  supportText.textContent = support.text;
}

// Search functionality
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('keyup', () => {
  const searchText = searchBar.value.toLowerCase();
  const users = document.querySelectorAll('.user');
  
  users.forEach(user => {
    const userName = user.querySelector('.user-info h2').textContent.toLowerCase();
    if (userName.includes(searchText)) {
      user.style.display = 'flex';
    } else {
      user.style.display = 'none';
    }
  });
});
