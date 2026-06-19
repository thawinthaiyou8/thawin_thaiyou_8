// เพิ่ม JavaScript สำหรับการโต้ตอบกับผู้ใช้ (Optional)
document.addEventListener('DOMContentLoaded', function () {
    console.log('Portfolio ของ Thawin พร้อมแล้ว!');
});

// --- โค้ดสำหรับไฟล์ script.js ---

document.addEventListener('DOMContentLoaded', () => {
    let clickCount = 0;
    const body = document.body;

    // 1. สร้าง HTMLElement สำหรับคำว่า "จิต" และสไตล์พื้นฐาน
    const jitButton = document.createElement('button');
    jitButton.innerText = 'จิต';
    jitButton.id = 'jit-button';
    jitButton.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 5rem;
        padding: 20px 40px;
        cursor: pointer;
        background: none;
        border: none;
        color: white; /* เปลี่ยนสีตามต้องการ */
        text-shadow: 0 0 10px rgba(0,0,0,0.5); /* ให้เห็นชัดขึ้น */
        z-index: 1000; /* ให้อยู่บนสุด */
        transition: transform 0.1s ease, opacity 0.5s ease;
    `;
    body.appendChild(jitButton);

    // 2. ฟังก์ชันเมื่อคลิก
    jitButton.addEventListener('click', () => {
        clickCount++;

        // เพิ่ม Effect ตอนกด (ขยายตัวนิดหน่อย)
        jitButton.style.transform = 'translate(-50%, -50%) scale(1.1)';
        setTimeout(() => {
            jitButton.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 100);

        if (clickCount >= 3) {
            explodeJit();
        }
    });

    // 3. ฟังก์ชันการระเบิด
    function explodeJit() {
        // ทำให้ปุ่มหายไป
        jitButton.style.opacity = '0';
        setTimeout(() => jitButton.remove(), 500);

        // สร้าง Effect การระเบิดเต็มหน้าจอ
        const explosionOverlay = document.createElement('div');
        explosionOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: transparent;
            background-image: 
                radial-gradient(circle at center, gold 0%, transparent 10%),
                radial-gradient(circle at 20% 30%, deepskyblue 0%, transparent 5%),
                radial-gradient(circle at 80% 70%, gold 0%, transparent 8%),
                /* เพิ่ม radial-gradient อีกหลายๆ จุดเพื่อสร้างกระจาย */
                radial-gradient(circle at 40% 80%, deepskyblue 0%, transparent 10%),
                radial-gradient(circle at 70% 20%, gold 0%, transparent 7%);
            background-size: 20px 20px; /* ขนาดของจุดเล็กๆ */
            z-index: 999;
            pointer-events: none; /* คลิกผ่านได้ */
            opacity: 0;
            transition: opacity 0.3s ease, transform 1s ease-out;
            transform: scale(0.5); /* เริ่มต้นจากเล็กๆ */
        `;
        body.appendChild(explosionOverlay);

        // แสดงผลการระเบิด (ขยายเต็มหน้าจอและจางหาย)
        requestAnimationFrame(() => {
            explosionOverlay.style.opacity = '1';
            explosionOverlay.style.transform = 'scale(2)'; /* ขยายใหญ่มาก */
        });

        // จางหายไปทั้งหมด
        setTimeout(() => {
            explosionOverlay.style.opacity = '0';
        }, 1000);

        // ลบ Overlay ออก
        setTimeout(() => {
            explosionOverlay.remove();
        }, 2000);
    }
});
