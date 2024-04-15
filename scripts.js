// Login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Handle login logic here
    var username = document.getElementById('username').value;
    if (!/^[a-zA-Z_]{18,}$/.test(username)) {
        alert('Username should contain at least 18 characters and only alphabets and underscore.');
        return;
    }
    // Continue with login logic
});

// Registration form submission
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Handle registration logic here
    var username = document.getElementById('username').value;
    if (!/^[a-zA-Z_]{18,}$/.test(username)) {
        alert('Username should contain at least 18 characters and only alphabets and underscore.');
        return;
    }
    // Continue with registration logic
});

function goBack() {
    window.history.back();
}