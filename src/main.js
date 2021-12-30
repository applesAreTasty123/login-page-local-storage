var userNameLength = 0;
var passwordLength = 0;
var userName = "";
var password = "";

var loginName = "";
var loginPassword = 0;;

var isLogedIn = false;
var isSignedIn = false;


function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const signupForm = document.querySelector("#createAccount");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });



    loginForm.querySelector("#loginBtn").addEventListener("click", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login
        console.log(localStorage.getItem("Username"));
        console.log(localStorage.getItem("Password"));
        console.log(localStorage.getItem("IsSignedIn"));

        if (localStorage.getItem("Username") == loginName && localStorage.getItem("Password") == loginPassword && localStorage.getItem("IsSignedIn")) {
            isLogedIn = true;
            localStorage.setItem("IsLoged", isLogedIn);
            alert("You are logged in!");

            window.location.href = "http://localhost:5500/Login%20page/dashboard.html";
        } else {
            alert("Failed to log in.");
        }
    });

    signupForm.querySelector("#signButton").addEventListener("click", e => {
        e.preventDefault();
        if (userNameLength >= 10 && passwordLength >= 6) {
            e.preventDefault();
            isLogedIn = false;
            isSignedIn = true;
            localStorage.setItem("Username", userName);
            localStorage.setItem("Password", password);
            localStorage.setItem("IsLoged", isLogedIn);
            localStorage.setItem("IsSignedIn", isSignedIn);
        } else {
            alert("Password needs to be at least 6 characters long and/or username needs to be at least 10 characters long.");
        }
    });



    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("input", e => {
            if (e.target.id === "signupUsername") {
                userNameLength = e.target.value.length;
                userName = e.target.value;
            }
        });

        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            if (e.target.id === "signupPassword") {
                passwordLength = e.target.value.length;
                password = e.target.value;
            }
        });

        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupPassword" && e.target.value.length > 0 && e.target.value.length < 6) {
                setInputError(inputElement, "Password must be at least 6 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            if (e.target.id === "loginUsername") {
                loginName = e.target.value;
                console.log(loginName);
            }
        });

        inputElement.addEventListener("input", e => {
            if (e.target.id === "loginPassword") {
                loginPassword = e.target.value;
                console.log(loginPassword);
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});