document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const password = document.getElementById('password').value;
    const correctPassword = 'devika8';

    if (password === correctPassword) {
        window.location.href = 'main.html'; // Redirect to main.html if password is correct
    } else {
        document.getElementById('errorMessage').textContent = 'Incorrect password. Please try again.'; // Show error message
    }
});
