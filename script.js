// form elements
const form = document.getElementById('form-container');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const phoneInput = document.getElementById('phone-input');
const passInput = document.getElementById('pass-input');
const CpassInput = document.getElementById('Cpass-input');

// error elements
const nameError = document.querySelector('.name-error');
const emailError = document.querySelector('.email-error');
const phoneError = document.querySelector('.phone-error');
const passError = document.querySelector('.pass-error');
const CpassError = document.querySelector('.Cpass-error');


// Add event listener to the form
form.addEventListener('submit', (event) => {

    event.preventDefault();

    // Validate inputs
    let valid = true;

    // name
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name field cannot be empty';
        valid = false;
    } else if (nameInput.value.length < 4) {
        nameError.textContent = 'Name cannot be too short';
        valid = false;

    } else {
        nameError.textContent = '';
    }

    // email
    function validEmail(email) {
        const emailContent = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailContent.test(email);
    }

    if (validEmail(emailInput.value)) {
        emailError.textContent = '';
    } else {
        emailError.textContent = 'Enter a valid email';
        valid = false;
    }

    // phone
    const phoneValid = /^[0-9]{10}$/;
    if (phoneValid.test(phoneInput.value)) {
        phoneError.textContent = '';
    } else {
        phoneError.textContent = 'Phone number should be 10 digits long';
        valid = false;
    }

    // password
    const passValid = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/;
    if (passInput.value.trim() === '') {
        passError.textContent = 'Enter a valid password';
        valid = false;
    } else if (!passValid.test(passInput.value)) {
        passError.textContent = 'Password should contain:  \nAtleast one upper case,\none lower case,\none number\nand a special character.';
        valid = false;
    }
    else {
        passError.textContent = '';
    }

    // confirm password
    if (CpassInput.value.trim() !== passInput.value.trim()) {
        CpassError.textContent = 'Passwords should match';
        valid = false;
    } else {
        CpassError.textContent = '';
    }

    // If valid, submit
    if (valid) {
        form.submit();
    }
});

const showPass = () => {
    if (passInput.type === 'password') {
        passInput.type = 'text'
    } else {
        passInput.type = 'password'
    }
}



// let paras = document.querySelectorAll('.paras');

// let resetFunction = () => {
//     paras.textContent = '';
// }