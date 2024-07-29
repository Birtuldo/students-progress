// Example users array (replace with your actual data)
const users = [
    { username: 'Rafael', password: '03051998', name: 'BALLESER, RAFAEL C.', page: 'https://birtuldo.github.io/students-progress/rafaeL.html' },
    { username: 'student2', password: 'password2', name: 'Another Student', page: 'progress_student2.html' }
];

// Function to authenticate user
function authenticate(event) {
    event.preventDefault();

    // Get input values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    // Clear previous error message
    errorMessage.textContent = '';

    // Find the user based on username and password
    const user = users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.password === password);

    if (user) {
        // Set a simple token in localStorage
        localStorage.setItem('authToken', btoa(`${username}:${password}`));

        // Redirect to the specific student's progress page
        window.location.href = `${user.page}?username=${encodeURIComponent(user.username)}&name=${encodeURIComponent(user.name)}`;
    } else {
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
}

// Event listener for form submission
document.getElementById('loginForm').addEventListener('submit', authenticate);

// Function to check authentication status
function checkAuth() {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
        window.location.href = 'login.html'; // Redirect to login if not authenticated
    }
}
