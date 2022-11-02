const form = document.querySelector('.form-container');
const userName = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirm-password');

const toggle = document.getElementById('toggle')
const toggleCircle = document.getElementById('toggle-circle')

const loginEmail = document.querySelector('.login-email');
const loginPassword = document.querySelector('.login-password');
var temp=0;
var required;
var check=""

form.addEventListener("submit", e => {
    e.preventDefault();
    if(localStorage.getItem("status")){
        checkLogin();
    }
    else if(localStorage.getItem("status")==false) {
    checkInputs();
    }
});

function checkLogin(){
    var loginCheck = true
    loginEmailValue = loginEmail.value.trim();
    loginPasswordValue = loginPassword.value.trim();
    
    userEmail = localStorage.getItem("userEmail")
    userPassword = localStorage.getItem("userPassword")

    if(!(userEmail==loginEmailValue)){
        showError(loginEmail, "Email Incorrect");
        loginCheck = false
    } 
    else {
        loginCheck = true
        removeError(loginEmail);
    }
    
    if(!(userPassword==loginPasswordValue)){
        showError(loginPassword, "Password Incorrect");
        loginCheck = false
    } 
    else {
        loginCheck = true
        removeError(loginPassword);
    }
    if(loginCheck){
        window.location.href = "home.html"
        localStorage.setItem("status",false);
    }

    
}

function checkInputs() {  
    
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();
  
    if (userNameValue === ""){
        showError(userName, "User Name cannot be empty");
    }
    else if (userNameValue.length<=5) {
      showError(userName, "User name is too short");
    } else {
      removeError(userName);
    };
  
    if (emailValue === "") {
        showError(email, "Email cannot be empty");
    }
    else if (!checkEmail(emailValue)) {
        showError(email, "Looks like this is not an email");
    } else {
        removeError(email);
    };
  
    passError = checkPassword(passwordValue)
    if (passwordValue === "") {
        showError(password, "Password cannot be empty");
    }
    else if(passError){
        showError(password, passError);
    } else {
        check = passwordValue
      removeError(password);
    };
    
    if(confirmPasswordValue=== ""){
        showError(confirmPassword, "Password cannot be empty");
    }
    else if(!check){
        showError(confirmPassword, "");
    }
    else if(!(confirmPasswordValue==check)){
        showError(confirmPassword, "Please write same password in both fields");
    }
    else{
        removeError(confirmPassword);
    }

    if(temp){
        localStorage.setItem("userEmail",emailValue);
        localStorage.setItem("userPassword",confirmPasswordValue);
        localStorage.setItem("status",true);
    }
  };


  function showError(input, message){
    const formComponent = input.parentElement;
    const errorMessage = formComponent.querySelector(".error-msg");

    errorMessage.innerText = message;
    formComponent.classList.add('not-valid');
    temp=0
  }
  

  function removeError(input) {
    const formComponent = input.parentElement;
    formComponent.classList.remove('not-valid');
    temp=1
  };
    

  function checkEmail (email) {
    return  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  };



  function checkPassword(data) {
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\^&\*])');
    const length = new RegExp('(?=.{8,})');

    // lower case validation check
    if (!lower.test(data)) {
      return "Password should include lowercase letters"
    } 
    // upper case validation check
    if (!upper.test(data)) {
        return "Password should include uppercase letters"
    } 
    // number validation check
    if (!number.test(data)) {
        return "Password should include numbers"
    } 
    // special character validation check
    if (!special.test(data)) {
        return "Password should include special characters(@/#?)"
    } 
    // minimum length validation check
    if (!length.test(data)) {
        return "Password should of minimum 8 characters"
    } 
    else {
        return 0
    }
}


  form.setAttribute("novalidate", "");

  if(loginEmail){
    required = [loginEmail, loginPassword];
  }
  else {
    required = [userName, email, password,confirmPassword];
  }


  required.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value) {
            removeError(input);
    }})
})  

const changeMode = () =>  {
    toggleCircle.classList.toggle('toggle__circle-right')
    document.body.classList.toggle('mode')
}


toggle.addEventListener('click', changeMode)