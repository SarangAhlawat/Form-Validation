let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let pass = document.getElementById("pass");
let Cpass = document.getElementById("Cpass");
let submission = 1;

function validateForm() {
    if(name.value == ""){
        document.getElementById("name_error").innerHTML = "Name field cannot be empty"
        console.log("empty");
    }
    return true;
}