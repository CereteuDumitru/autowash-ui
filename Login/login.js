document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Previne trimiterea formularului

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');

    // Resetare mesaj eroare
    passwordError.style.display = 'none';

    // Validare parolă
  const passwordRegex = /^[A-Z].{7,}$/; // Prima literă mare, minim 8 caractere
    if (!passwordRegex.test(password)) {
        passwordError.textContent = 'Password must start with an uppercase letter and be at least 8 characters long.';
        passwordError.style.display = 'block'; // Afișează eroarea sub câmpul parolei
        return;
    }

    // Dacă validările sunt trecute
    alert(`Welcome, ${firstName} ${lastName}! You are successfully logged in.`);
});

function redirectToRegister() {
    window.location.href = "register.html"; // Redirecționează către pagina de înregistrare
}