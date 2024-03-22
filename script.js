const formElement = document.querySelector('form');

const pwdInputElement = document.querySelector('input[name="pwd"]');

const confirmPwdElement = document.querySelector('input[name="confirm-pwd"]');

const pwdOutputElement = document.querySelector('.pwd-output');

function preventFormSubmission(e) {
    e.preventDefault();
}

function handleInput(e) {
    const pwd = pwdInputElement.value;
    const confirmPwd = confirmPwdElement.value;
    if(pwd === confirmPwd) {
        pwdOutputElement.style.display = 'none';
        formElement.removeEventListener('submit', preventFormSubmission);
    }else {
        pwdOutputElement.style.display = 'block';
        formElement.addEventListener('submit', preventFormSubmission)
    }
}

pwdInputElement.addEventListener('input', handleInput);

confirmPwdElement.addEventListener('input', handleInput);