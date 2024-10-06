document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const correctPassword = 'devika08'; // Replace with your password

    if (password === correctPassword) {
        window.location.href = 'main.html'; // Redirects to main.html
    } else {
        document.getElementById('errorMessage').textContent = 'Incorrect password. Please try again.';
    }
});
