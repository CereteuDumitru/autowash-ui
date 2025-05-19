
const phoneInput = document.getElementById("phone");
const phoneError = document.createElement("small");
phoneError.classList.add("error-message");
phoneInput.parentElement.appendChild(phoneError);

phoneInput.addEventListener("input", () => {
    const phoneValue = phoneInput.value;

    if (phoneValue.length !== 8 || isNaN(phoneValue)) {
        phoneError.textContent = "Numărul de telefon trebuie să conțină exact 8 cifre.";
    } else {
        phoneError.textContent = ""; 
    }
});


const formContainer = document.getElementById("register-container");
const successContainer = document.getElementById("success-container");
const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", (event) => {
    event.preventDefault(); 

    formContainer.classList.add("hidden");

    successContainer.classList.remove("hidden");
});