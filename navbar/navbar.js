const userIcon = document.getElementById('userIcon');
const dropdownMenu = document.getElementById('dropdownMenu');
const logoutOption = document.getElementById('logoutOption');
const logoutModal = document.getElementById('logoutModal');
const confirmLogout = document.getElementById('confirmLogout');
const cancelLogout = document.getElementById('cancelLogout');

userIcon.addEventListener('click', () => {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  
});

logoutOption.addEventListener('click', () => {
    dropdownMenu.style.display = 'none'; 
    logoutModal.style.display = 'flex';
});


cancelLogout.addEventListener('click', () => {
    logoutModal.style.display = 'none';
});


confirmLogout.addEventListener('click', () => {
    window.location.href = "../Login/login.html"; 
});
document.getElementById("navDespreNoi").addEventListener("click", () => {
    window.location.href = "../desprenoi/desprenoi.html"; 
});

document.getElementById("navPreturi").addEventListener("click", () => {
    window.location.href = "../preturi/preturi.html"; 
});

document.getElementById("navHome").addEventListener("click", () => {
    window.location.href = "../homepage/homepage.html"; 
});


const reportOption = document.getElementById('reportOption');
const reportModal = document.getElementById('reportModal');
const closeReport = document.getElementById('closeReport');
const sendReport = document.getElementById('sendReport');
const reportText = document.getElementById('reportText');

reportOption.addEventListener('click', () => {
    reportModal.style.display = 'flex';
});


closeReport.addEventListener('click', () => {
    reportModal.style.display = 'none';
    reportText.value = ''; 
});

sendReport.addEventListener('click', () => {
    const message = reportText.value.trim();
    if (message) {
        alert('Raportul a fost trimis cu succes: ' + message);
        reportModal.style.display = 'none';
        reportText.value = ''; 
    } else {
        alert('Te rugăm să completezi câmpul cu detalii despre problemă.');
    }
});