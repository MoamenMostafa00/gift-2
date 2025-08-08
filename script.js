let clickCount = 0;

function decorateCake() {
    clickCount++;
    const clicksDisplay = document.getElementById('clicks');

    clicksDisplay.textContent = `Clicks: ${clickCount}/5 🩺`;

    if (clickCount === 5) {
        window.location.href = 'message.html';
    }
}
