// Task 3: Dynamic Form Validator
const form = document.getElementById('dynamicForm');
const errorsDiv = document.getElementById('errors');

// Validation rules configuration
const validationRules = {
  email: { required: true, regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  password: {
    required: true,
    minLength: 8,
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
  },
  phone: { required: false, regex: /^\d{10}$/ }
};

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Clear previous errors
  errorsDiv.innerHTML = '';
  const formData = new FormData(form);
  const errors = [];

  // Validate each field
  for (let [field, value] of formData.entries()) {
    const rules = validationRules[field];
    if (rules.required && !value) {
      errors.push(`${field} is required.`);
    }
    if (rules.regex && !rules.regex.test(value)) {
      errors.push(`${field} is invalid.`);
    }
    if (rules.minLength && value.length < rules.minLength) {
      errors.push(`${field} must be at least ${rules.minLength} characters long.`);
    }
  }

  // Display errors or submit form
  if (errors.length > 0) {
    errorsDiv.textContent = errors.join('\n');
  } else {
    alert('Form submitted successfully!');
  }
});