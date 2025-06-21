// script.js

// กำหนดวันที่เริ่มต้นที่เราอยู่ด้วยกัน: 26 มีนาคม 2025 เวลา 00:00:00
// ใช้ Date.UTC() เพื่อป้องกันปัญหา Timezone (เดือนใน JavaScript เป็น 0-indexed: มกราคม=0, มีนาคม=2)
const startDate = new Date(Date.UTC(2025, 2, 26, 0, 0, 0)); // หมายเหตุ: ตอนนี้คือ 21 มิ.ย. 2025, เวลาเริ่มต้น 26 มี.ค. 2025

const counter = document.getElementById("counter");

// แก้ไขชื่อไฟล์รูปภาพตรงนี้ ให้ตรงกับที่คุณมีในโฟลเดอร์ images
// จาก 'bigblackmemeow.png' เป็น 'myboo.png'
const images = ["images/mycutie.jpg", "images/myboo.png" ,
     "images/peach1.png", "images/peach2.png", 
     "images/peach3.png", "images/peach4.jpg", 
     "images/peach5.jpg", "images/peach6.png",
     "images/peach7.png", "images/peach8.png",
     "images/peach9.png", "images/peach10.png",
     "images/peachสุด.png", "images/peachท้าย.png",
     "images/peachนี้.png", "images/peachอยาก.png",
     "images/peachจะ.png", "images/peachบอก.png",
     "images/peachว่า.png", "images/peachรัก.png",
     "images/peachนะ.png", "images/peachme.png",
    ];
let currentImage = 0;

window.addEventListener("DOMContentLoaded", () => {
    const bgm = document.getElementById("bgm");
  
    // ตั้งระดับเสียงให้เบา เหมาะกับ background
    bgm.volume = 0.2;
  
    // บางเบราว์เซอร์ต้องให้ผู้ใช้คลิกก่อนถึงจะเล่นได้
    document.body.addEventListener("click", () => {
      if (bgm.paused) {
        bgm.play();
      }
    }, { once: true });
});

function updateCounter() {
    const now = new Date(); 
    let diffMilliseconds = now.getTime() - startDate.getTime();

    if (diffMilliseconds < 0) {
        document.getElementById('time-count').innerText = 'ยังไม่ถึงวันเริ่มต้นเลยนะ';
        document.getElementById('cute-msg').innerText = '';
        return;
    }

    // คำนวณเดือน วัน ชั่วโมง นาที วินาที เหมือนเดิม

    let months = 0;
    let tempDateForMonths = new Date(startDate);
    while (tempDateForMonths.getTime() <= now.getTime()) {
        tempDateForMonths.setUTCMonth(tempDateForMonths.getUTCMonth() + 1);
        if (tempDateForMonths.getTime() <= now.getTime()) {
            months++;
        } else {
            tempDateForMonths.setUTCMonth(tempDateForMonths.getUTCMonth() - 1);
            break;
        }
    }
    diffMilliseconds = now.getTime() - tempDateForMonths.getTime();

    let diffSeconds = Math.floor(diffMilliseconds / 1000);

    const days = Math.floor(diffSeconds / (24 * 60 * 60));
    diffSeconds %= (24 * 60 * 60);

    const hours = Math.floor(diffSeconds / (60 * 60));
    diffSeconds %= (60 * 60);

    const minutes = Math.floor(diffSeconds / 60);
    const seconds = diffSeconds % 60;

    let parts = [];
    if (months > 0) parts.push(`${months} เดือน`);
    if (days > 0) parts.push(`${days} วัน`);
    if (hours > 0) parts.push(`${hours} ชั่วโมง`);
    if (minutes > 0) parts.push(`${minutes} นาที`);
    if (seconds >= 0 || parts.length === 0) parts.push(`${seconds} วินาที`);

    let timeMessage = `ขอบคุณที่อยู่ด้วยกันมาแล้ว ${parts.join(' ')}`;
    let cuteMessage = `"ถึงเเม้ว่ากายเราจะไม่ได้อยู่ข้างกัน เเต่หัวใจเราอยู่ข้างเเกตลอดนะ"`;

    document.getElementById('time-count').innerText = timeMessage;
    document.getElementById('cute-msg').innerText = cuteMessage;
}

// ฟังก์ชันสำหรับเปลี่ยนรูปภาพใน Gallery
function nextimage() {
    const img = document.getElementById("gallery-img");
  
    // ใส่ animation class
    img.classList.add("pop-effect");
  
    // เปลี่ยนภาพ
    currentImage = (currentImage + 1) % images.length;
    img.src = images[currentImage];
  
    // ลบ class หลัง animation จบ เพื่อให้เล่นซ้ำได้
    setTimeout(() => {
      img.classList.remove("pop-effect");
    }, 300);
  }

// ตั้งเวลาให้ updateCounter ทำงานทุก 1 วินาที
setInterval(updateCounter, 1000);

// เรียกใช้งาน updateCounter ครั้งแรกเมื่อโหลดหน้าเว็บ เพื่อแสดงค่าเริ่มต้นทันที
updateCounter();
window.addEventListener("DOMContentLoaded", () => {
    const bgm = document.getElementById("bgm");
  
    // ตั้งระดับเสียงให้เบา เหมาะกับ background
    bgm.volume = 0.2;
  
    // บางเบราว์เซอร์ต้องให้ผู้ใช้คลิกก่อนถึงจะเล่นได้
    document.body.addEventListener("click", () => {
      if (bgm.paused) {
        bgm.play();
      }
    }, { once: true });
  });
  