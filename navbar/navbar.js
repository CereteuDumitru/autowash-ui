const userIcon = document.getElementById('userIcon');
const dropdownMenu = document.getElementById('dropdownMenu');
const logoutOption = document.getElementById('logoutOption');
const logoutModal = document.getElementById('logoutModal');
const confirmLogout = document.getElementById('confirmLogout');
const cancelLogout = document.getElementById('cancelLogout');

userIcon.addEventListener('click', () => {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    console.log("Asmkdsjab");
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

document.getElementById("navDetergentiEco").addEventListener("click", () => {
    window.location.href = "detergenti-eco.html"; 
});

document.getElementById("navDetalii").addEventListener("click", () => {
    window.location.href = "detalii.html"; 
});