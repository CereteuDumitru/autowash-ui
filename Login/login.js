document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');

    // Ascundem mesajele de eroare
    passwordError.style.display = 'none';

    // Validăm parola
    const passwordRegex = /^[A-Z].{7,}$/; 
    if (!passwordRegex.test(password)) {
        passwordError.textContent = 'Password must start with an uppercase letter and be at least 8 characters long.';
        passwordError.style.display = 'block';
        return;
    }

    // Afișăm un mesaj de bun venit (opțional)
    alert(`Welcome, ${firstName} ${lastName}! You are successfully logged in.`);

    // Redirecționăm utilizatorul către pagina "homepage"
    window.location.href = "../homepage/homepage.html"; 
});

function redirectToRegister() {
    window.location.href = "../register/register.html"; 
}