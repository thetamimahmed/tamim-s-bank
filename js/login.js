function inputField(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    return inputValue;
}

document.getElementById('login-btn').addEventListener('click', function(){
    //get user email
    const emailInput = inputField('email-field');
    //get user password
    const passwordInput = inputField('password-field');
    //condition to enter banking page
    if(emailInput == 'tamim@bank.com' && passwordInput == 'secret'){
        window.location.href = 'banking.html';
    }  
})