document.getElementById('login-btn').addEventListener('click', function(){
    //get user email
    const emailField = document.getElementById('email-field');
    const emailInput = emailField.value;
    //get user password
    const passwordField = document.getElementById('password-field');
    const passwordInput = passwordField.value;
    //condition to enter banking page
    if(emailInput == 'tamim@bank.com' && passwordInput == 'secret'){
        window.location.href = 'banking.html';
    }  
})