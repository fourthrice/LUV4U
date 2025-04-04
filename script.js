const flap = document.querySelector('.flap');
const toText = document.querySelector('.to');
const letter = document.querySelector('.letter');
const heartsContainer = document.getElementById('hearts-container');

// Function to animate flap opening
function openEnvelope() {
    flap.style.transform = 'rotateX(180deg)';
    toText.style.display = 'none';
    letter.style.display = 'block';
    generateHearts();
}

// Function to generate hearts
function generateHearts() {
    let heartCount = 10; // Increased size of hearts for a fuller screen
    for (let i = 0; i < heartCount; i++) {
        createHeart();
    }
}

// Function to create a heart
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heartsContainer.appendChild(heart);

    const size = Math.random() * 60 + 60; // Random size for each heart
    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight; // Start from inside the envelope

    heart.style.left = `${startX}px`;
    heart.style.top = `${startY}px`;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    // Animation for hearts
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`; // Randomize heart speed
}

// Trigger the envelope opening after a short delay
setTimeout(openEnvelope, 2000); 
