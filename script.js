document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting and reloading the page

    const password = document.getElementById('password').value; // Gets the entered password
    const correctPassword = 'devika08'; // The correct password to check against

    // Check if the entered password matches the correct one
    if (password === correctPassword) {
        window.location.href = 'main.html'; // Redirects to main.html if the password is correct
    } else {
        // Displays an error message if the password is incorrect
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = 'Incorrect password. Please try again.';
        errorMessage.style.display = 'block'; // Ensure error message is visible
    }
});
