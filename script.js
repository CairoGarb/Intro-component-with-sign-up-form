// Variables
const form = document.getElementById('form');
const usernameInput = document.getElementById('username')
const lNameInput = document.getElementById('last-name')
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Event listener
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateInputs();
});

// Function to validate the inputs
function validateInputs() {
    const usernameValue = usernameInput.value.trim();
    const lNameValue = lNameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (usernameValue === '') {
        setError(usernameInput, 'First name cannot be empty')
    } else if (usernameValue.length < 3) {
        setError(usernameInput, 'First name need at least 3 letters')
    } else {
        setSuccess(usernameInput);
    }

    if (lNameValue === '') {
        setError(lNameInput, 'Last name cannot be empty')
    } else if (lNameValue.length < 3) {
        setError(lNameInput, 'Last name need at least 3 letters')
    } else {
        setSuccess(lNameInput);
    }

    if (emailValue === '') {
        setError(emailInput, 'Looks like this is not an email')
    } else if (!isValidEmail(emailValue)) {
        setError(emailInput, 'Looks like this is not an email')
    } else {
        setSuccess(emailInput);
    }

    if (passwordValue === '') {
        setError(passwordInput, 'Password cannot be empty')
    } else if (passwordValue.length < 8) {
        setError(passwordInput, 'Password need at least 8 characteres')
    } else {
        setSuccess(passwordInput);
    }

}

// Error Function
function setError(input, message) {
    const inputControl = input.parentElement;
    errorDisplay = inputControl.querySelector('.error-msg');

    errorDisplay.innerText = message;
    inputControl.className = 'input-control error';
}

// Success Function
function setSuccess(input) {
    const inputControl = input.parentElement;

    inputControl.className = 'input-control success';
}

// Check if email is valid
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}