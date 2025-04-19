// Sample user data (for demonstration purposes)
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

// Function to handle login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('loginMessage');

    // Check if the username and password match any user
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        loginMessage.innerText = 'Login successful! Redirecting...';
        // Redirect to the home page after a short delay
        setTimeout(() => {
            window.location.href = 'index.html'; // Redirect to home page
        }, 2000);
    } else {
        loginMessage.innerText = 'Invalid username or password. Please try again.';
    }
});