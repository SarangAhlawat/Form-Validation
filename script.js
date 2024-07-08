let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let pass = document.getElementById("pass");
let Cpass = document.getElementById("Cpass");
let submission = 1;

function validateForm() {
    if (name.value == "") {
        document.getElementById("name_error").textContent = "Name field cannot be empty"
    }
    else if (name.value.length < 3) {
        document.getElementById("name_error").textContent = "Length of name cannot be too short"
    }
    return false;
}
