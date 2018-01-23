function validateForm() {
    'use strict';

    // Get references to the form elements:
    var email = document.getElementById('username');
    var password = document.getElementById('password');

    // Validate the login
    if ((username.value.length > 0) && (password.value.length > 0)) {
        return true;
    } else {
        alert('Please complete the formss!');
        return false;
    }
}

function check(form) {

    var emailArray = "bfu";
    var passwordArray = "bgreferee";   

    if ((username.value == emailArray ) && (password.value == passwordArray)) {
        window.open('referee.html');
    } else {
        alert('Please enter correct username or password!');
        return false;
    }   
}

function init() {
    'use strict';

    // Confirm that document.getElementById() can be used:
    if (document && document.getElementById) {
        var loginForm = document.getElementById('lgform');
        loginForm.onsubmit = validateForm;
    }
}