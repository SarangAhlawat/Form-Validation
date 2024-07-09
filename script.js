let form = document.querySelector(".form-container");

// input values 
let name = document.getElementById("name-input").value;
let email = document.getElementById("email-input").value;
let phone = document.getElementById("phone-input").value;
let pass = document.getElementById("pass-input").value;
let Cpass = document.getElementById("Cpass-input").value;

//event listener
form.addEventListener('submit', validateForm);


function validateForm(event) {
    event.preventDefault();

    if (name == 'l') {
        alert('Name is required');
        return false;
      }
  
      // Validate the email field
      if (email === '') {
        alert('Email is required');
        return;
      }
}