// script.js
function updateClock() {
    const now = new Date();
    const options = {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const istTime = now.toLocaleTimeString('en-US', options);
    document.getElementById('clock').textContent = `IST: ${istTime}`;
}

setInterval(updateClock, 1000); // Update every second
updateClock(); // Initial update
