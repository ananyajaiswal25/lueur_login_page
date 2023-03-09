var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var passwordError = document.getElementById("password-error");

function validateName() {
    var name = document.getElementById("username").value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write Full Name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById("mail").value;
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(email)
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (email.match(mailFormat)) {
        emailError.innerHTML = 'Email is valid';
    } else {
        emailError.innerHTML = 'Email is Invalid';
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePass() {
    var password = document.getElementById("pass").value;

    if (password.length == 0) {
        passwordError.innerHTML = 'Password is required';
        return false;
    }
    if (password.length !== 10) {
        passwordError.innerHTML = 'Password length insufficient';
        return false;
    }

    if (!password.match(/^[0-9]{10}$/)) {
        passwordError.innerHTML = 'Password must be numeric';
        return false;
    }
    passwordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}