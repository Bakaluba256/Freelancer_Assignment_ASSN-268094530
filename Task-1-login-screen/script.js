// Task 1: Login Screen Validation
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    // Get form values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorDiv = document.getElementById('errorMessages');
    errorDiv.innerHTML = ''; // Clear previous errors
  
    // Validate fields
    if (!username || !password) {
      errorDiv.textContent = 'Please fill in all fields.';
      return;
    }
  
    // Simulate successful login
    alert('Login successful!');
  });