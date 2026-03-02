// WhatsApp Integration
const WHATSAPP_NUMBER = "62XXX"; // Ganti dengan nomor WhatsApp Anda
const WHATSAPP_MESSAGE = "Halo! Saya ingin mendaftar Jaratoto dan mendapatkan bonus Rp 10 juta.";

document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const wa = document.getElementById('wa').value;
    const email = document.getElementById('email').value;
    
    // Format nomor WhatsApp
    let waFormatted = wa;
    if (wa.startsWith('0')) {
        waFormatted = '62' + wa.substring(1);
    }
    
    // Buat pesan lengkap
    const message = `${WHATSAPP_MESSAGE}%0A%0ANama: ${nama}%0ANo HP: ${wa}%0AEmail: ${email || 'Tidak diberikan'}`;
    
    // Redirect ke WhatsApp
    const whatsappUrl = `https://wa.me/${waFormatted}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    this.reset();
});

// Countdown Timer
function updateCountdown() {
    let countdownDate = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 jam dari sekarang
    
    setInterval(function() {
        let now = new Date().getTime();
        let distance = countdownDate - now;
        
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
        
        // Update slot count
        let slotCount = 100 - Math.floor(Math.random() * 20);
        document.getElementById('slot-count').innerText = slotCount;
    }, 1000);
}

updateCountdown();

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer untuk animasi
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.benefit-card, .keunggulan-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});
