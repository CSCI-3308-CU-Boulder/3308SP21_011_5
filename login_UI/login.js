
// These are set error message functions

/* function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form__message")

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success","form__message--error");
    messageElement.classList.add('form__message--${type}');
} */



/* function setInputError(inputElement, message){
    inputElement.classList.add("form__input--error")
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
} */
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#Login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e =>  {
            e.preventDefault();
            loginForm.classList.add("form--hidden");
            createAccountForm.classList.remove("form--hidden");


        });
    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });
    //This is use to 
   /*  loginForm.addEventListener("submit",e => {
        e.preventDefault();

        setFormMessage(loginForm, "error","Invalid username/password")
    }); */
    // error message
   /*  document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e =>{
            if(e.target.id ==="signUpUserName" && e.target.value.length >0 && e.target.value.length<10){
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });
    }); */
});