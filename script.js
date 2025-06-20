
const startDate = new Date("2024-03-26T00:00:00");
const counter = document.getElementById("counter");
const images = ["images/mycutie.jpg", "images/game_scene.png"];
let currentImage = 0;

function updateCounter() {
    const now = new Date();
    let diff = Math.floor((now - startDate) / 1000);
    const months = Math.floor(diff / (30 * 24 * 60 * 60));
    diff %= 30 * 24 * 60 * 60;
    const days = Math.floor(diff / (24 * 60 * 60));
    diff %= 24 * 60 * 60;
    const hours = Math.floor(diff / 3600);
    diff %= 3600;
    const minutes = Math.floor(diff / 60);
    const seconds = diff % 60;
    counter.innerText = `ขอบคุณที่อยู่ด้วยกันมาแล้ว ${months} เดือน ${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที 💖`;
}

function nextImage() {
    currentImage = (currentImage + 1) % images.length;
    document.getElementById("gallery-img").src = images[currentImage];
}

setInterval(updateCounter, 1000);
updateCounter();
