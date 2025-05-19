function updatePrices(vehicleType) {
   
    const buttons = document.querySelectorAll('.vehicle-button');
    buttons.forEach(button => button.classList.remove('active'));

    
    const activeButton = document.querySelector(`.vehicle-button[onclick="updatePrices('${vehicleType}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }

   
    const prices = {
        berlina: { confort: 150, combo: 230, premium: 300 },
        suv: { confort: 170, combo: 260, premium: 330 },
        microbuz: { confort: 180, combo: 280, premium: 360 },
    };

   
    if (prices[vehicleType]) {
        document.getElementById('price-confort').textContent = prices[vehicleType].confort;
        document.getElementById('price-combo').textContent = prices[vehicleType].combo;
        document.getElementById('price-premium').textContent = prices[vehicleType].premium;
    } else {
        console.error(`Tipul de vehicul "${vehicleType}" nu este valid.`);
    }
}
