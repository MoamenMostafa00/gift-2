let clickCount = 0;

function decorateCake() {
    clickCount++;
    const clicksDisplay = document.getElementById('clicks');

    clicksDisplay.textContent = `Clicks: ${clickCount}/5 🩺`;

    if (clickCount === 5) {
        window.location.href = 'message.html';
    }
}

function createFirework() {
    const firework = document.createElement('div');
    firework.classList.add('firework');

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const size = Math.random() * 50 + 20;

    firework.style.width = `${size}px`;
    firework.style.height = `${size}px`;
    firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    firework.style.left = `${x}px`;
    firework.style.top = `${y}px`;

    document.getElementById('fireworks-container').appendChild(firework);

    setTimeout(() => {
        firework.remove();
    }, 1000);
}

function launchFireworks() {
    for (let i = 0; i < 25; i++) {
        setTimeout(createFirework, i * 200);
    }
}

window.onload = launchFireworks;

