function updatePrices(vehicleType) {
    // Selectăm butoanele și resetăm clasa "active"
    const buttons = document.querySelectorAll('.vehicle-button');
    buttons.forEach(button => button.classList.remove('active'));

    // Adăugăm clasa "active" la butonul selectat
    const activeButton = document.querySelector(`.vehicle-button[onclick="updatePrices('${vehicleType}')"]`);
    activeButton.classList.add('active');

    // Definim prețurile pentru fiecare tip de vehicul
    const prices = {
        berlina: { confort: 150, combo: 230, premium: 300 },
        suv: { confort: 170, combo: 260, premium: 330 },
        microbuz: { confort: 180, combo: 280, premium: 360 },
    };

    // Actualizăm prețurile în funcție de vehiculul selectat
    document.getElementById('price-confort').textContent = prices[vehicleType].confort;
    document.getElementById('price-combo').textContent = prices[vehicleType].combo;
    document.getElementById('price-premium').textContent = prices[vehicleType].premium;
}
console.log("DJSAHJH")