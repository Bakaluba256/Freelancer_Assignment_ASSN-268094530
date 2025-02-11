# Freelancer_Assignment_ASSN-268094530
Take home Assignment

Project Overview  

This repository contains the solution for the "Freelancer Assignment," which includes four distinct tasks implemented using JavaScript, HTML, and CSS. The tasks are designed to showcase proficiency in software development, including form validation, API consumption, responsive design, and algorithmic problem-solving. 

The project is modular, with each task organized into its own directory for clarity and maintainability. 

Features  

    Task 1: Login Screen  
        A responsive login screen with username, password fields, and a "Remember Me" checkbox.
        Includes social login buttons (Google, Facebook) and a "Forgot Password" link.
        Form validation implemented using vanilla JavaScript.
         

    Task 2: Consume an Existing API  
        Consumes the JSONPlaceholder API to perform CRUD operations.
        Implements pagination, state management, and caching to optimize performance.
        Designed as a Single Page Application (SPA).
         

    Task 3: Dynamic Form Validator  
        A modular validation system that dynamically validates multiple fields (e.g., email, password, phone number).
        Supports required fields, regex validation, and minimum length validation.
        Errors are displayed without reloading the page.
         

    Task 4: Longest Substring Without Repeating Characters  

    An algorithmic solution to find the length of the longest substring without repeating characters.
    Provides two options for interaction:
        Running the script in a Node.js environment with dynamic input.
        Using a web-based interface for dynamic input.
         
     
Directory Structure  
freelancer-assignment/
│
├── task-1-login-screen/
│   ├── index.html          # HTML file for the login screen
│   ├── style.css           # CSS file for styling the login screen
│   └── script.js           # JavaScript file for form validation
│
├── task-2-api-consumer/
│   ├── index.html          # HTML file for the API consumer
│   ├── style.css           # CSS file for styling the API consumer
│   └── script.js           # JavaScript file for consuming the API
│
├── task-3-dynamic-form-validator/
│   ├── index.html          # HTML file for the dynamic form validator
│   ├── style.css           # CSS file for styling the form validator
│   └── script.js           # JavaScript file for form validation logic
│
└── task-4-longest-substring/
    ├── option 1 - Using node.js/ # Directory for the Node.js interactivity
    |   ├── script.js           # JavaScript file for the algorithm implementation (Node.js option)
    └── option 2 (Web-page interactivity)/ # Directory for the web-based interface
        ├── index.html      # HTML file for the web-based interface
        └── script.js       # JavaScript file for the web-based interface


Instructions to Run the Project  
Prerequisites  

    Ensure you have the following installed:
        A modern web browser (e.g., Chrome, Firefox, Edge, Safari).
        Node.js  for running Task 4 in the Node.js environment (optional)
                 

Tasks and Their Implementation  
Task 1: Login Screen  

    Implemented using HTML, CSS, and vanilla JavaScript.
    Features include:
        Responsive design for both desktop and mobile devices.
        Form validation for username and password fields.
        Optional features like "Remember Me" checkbox, social login buttons, and "Forgot Password" link.
           
Task 2: Consume an Existing API  

    Consumes the JSONPlaceholder API to fetch posts.
    Implements:
        Pagination for displaying a limited number of posts at a time.
        State management to handle fetched data.
        Caching to reduce latency on repeated API calls.

Task 3: Dynamic Form Validator  

    A modular validation system implemented using a configuration object.
    Supports:
        Required fields.
        Regex validation for email, password, and phone number fields.
        Minimum length validation for password fields.
         
    Errors are displayed dynamically without reloading the page.
     
Task 4: Longest Substring Without Repeating Characters  

    Option 1: Run in Node.js Environment  
        Navigate to the task-4-longest-substring directory/option 1- Using node.js directory
        The run:
        
        ```bash
        node script.js
     
    Follow the prompts to enter a string and view the result.
     
    Option 2: Use Web-Based Interface  

        Navigate to the task-4-longest-substring/web-interface directory.
        Open the index.html file in your web browser.
        Enter a string in the input field and click the "Calculate" button to see the result.
     
Technologies Used  

    HTML : For structuring the web pages.
    CSS : For styling the user interface.
    JavaScript : For implementing functionality, form validation, and algorithmic solutions.
    Node.js : For running the algorithmic solution in a server-side environment.
    JSONPlaceholder API : For consuming RESTful APIs in Task 2.
     
     