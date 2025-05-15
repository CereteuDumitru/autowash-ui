// Selectăm câmpul de telefon și elementul pentru eroare
const phoneInput = document.getElementById("phone");
const phoneError = document.createElement("small");
phoneError.classList.add("error-message");
phoneInput.parentElement.appendChild(phoneError);

// Funcție pentru validarea numărului de telefon
phoneInput.addEventListener("input", () => {
    const phoneValue = phoneInput.value;

    // Verificăm dacă numărul conține exact 8 caractere
    if (phoneValue.length !== 8 || isNaN(phoneValue)) {
        phoneError.textContent = "Numărul de telefon trebuie să conțină exact 8 cifre.";
    } else {
        phoneError.textContent = ""; // Ștergem mesajul de eroare dacă este valid
    }
});
const formContainer = document.getElementById("register-container");
const successContainer = document.getElementById("success-container");
const submitBtn = document.getElementById("submitBtn");

// Adăugăm un eveniment pentru butonul "Programeaza-te"
submitBtn.addEventListener("click", () => {
    // Ascundem formularul
    formContainer.classList.add("hidden");

    // Afișăm mesajul de succes
    successContainer.classList.remove("hidden");
}); 