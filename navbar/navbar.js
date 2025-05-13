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