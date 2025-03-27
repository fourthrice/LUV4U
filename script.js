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
    let heartCount = 5; // Keep fewer hearts to make them bigger
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
    const startY = Math.random() * window.innerHeight;
    const endSize = size * 2;

    heart.style.position = 'absolute';
    heart.style.left = `${startX}px`;
    heart.style.top = `${startY}px`;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.backgroundColor = 'red';
    heart.style.clipPath = 'polygon(50% 0%, 0% 38%, 100% 38%)';
    heart.style.transformOrigin = 'center';
    
    // Animation for hearts
    heart.animate([
        {
            transform: 'scale(1)',
            left: `${startX}px`,
            top: `${startY}px`,
            opacity: 1,
        },
        {
            transform: `scale(${endSize / size})`,
            left: `${startX - 100}px`,
            top: `${startY - 100}px`,
            opacity: 0,
        }
    ], {
        duration: 3000,
        easing: 'ease-out',
        fill: 'forwards',
    });

    setTimeout(() => heart.remove(), 3000); // Remove heart after animation
}

// Trigger the envelope opening after a short delay
setTimeout(openEnvelope, 2000); 
