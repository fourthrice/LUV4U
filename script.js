function openEnvelope() {
    document.getElementById("envelope").classList.add("open");
    setTimeout(() => {
        document.getElementById("message").style.display = "block";
        setInterval(createHeart, 300);
    }, 1000);
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    document.body.appendChild(heart);
    
    const randomX = Math.random() * window.innerWidth;
    heart.style.left = `${randomX}px`;
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
} 
