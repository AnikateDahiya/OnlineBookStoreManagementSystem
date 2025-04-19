document.addEventListener('DOMContentLoaded', () => {
    // Load existing account details from local storage
    const userDetails = JSON.parse(localStorage.getItem('userDetails')) || {};

    // Populate the form fields with existing data
    document.getElementById('username').value = userDetails.username || '';
    document.getElementById('email').value = userDetails.email || '';
    document.getElementById('password').value = userDetails.password || '';

    // Display account information
    const accountInfoDiv = document.getElementById('account-info');
    accountInfoDiv.innerHTML = `
        <h3>Welcome, ${userDetails.username || 'Guest'}!</h3>
        <p>Email: ${userDetails.email || 'Not provided'}</p>
    `;

    // Handle form submission
    document.getElementById('account-form').addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get the updated values from the form
        const updatedDetails = {
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
        };

        // Save the updated details to local storage
        localStorage.setItem('userDetails', JSON.stringify(updatedDetails));

        // Display a success message
        document.getElementById('message').innerText = 'Account details updated successfully!';
        
        // Optionally, update the displayed account info
        accountInfoDiv.innerHTML = `
            <h3>Welcome, ${updatedDetails.username}!</h3>
            <p>Email: ${updatedDetails.email}</p>
        `;
    });
});