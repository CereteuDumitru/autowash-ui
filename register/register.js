document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; 
    const passwordRegex = /^[A-Z].{7,}$/; 

    emailError.style.display = 'none';
    passwordError.style.display = 'none';

    
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Email-ul trebuie să fie @gmail.com.';
        emailError.style.display = 'block';
        return;
    }

    
    if (!passwordRegex.test(password)) {
        passwordError.textContent = 'Parola trebuie să înceapă cu o literă mare și să aibă cel puțin 8 caractere.';
        passwordError.style.display = 'block';
        return;
    }

  
    document.getElementById('register-container').style.display = 'none';
    document.getElementById('confirmation-container').classList.remove('hidden');
});

function redirectToLogin() {
    window.location.href = "../Login/login.html"; 
}