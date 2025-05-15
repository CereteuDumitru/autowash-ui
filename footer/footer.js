// Selectăm formularul din footer
const footerForm = document.querySelector('.footer-form');

footerForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Previne trimiterea formularului

    const phoneInput = document.querySelector('.footer-input').value;

    if (phoneInput.trim() === '') {
        alert('Vă rugăm să introduceți un număr de telefon!');
    } else {
        alert('Mulțumim! Vă vom contacta în curând.');
        // Poți adăuga un request către server aici
    }

    document.querySelector('.footer-input').value = '';
});