document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.querySelector('.envelope');
    const letter = document.querySelector('.letter');
    const introText = document.querySelector('.intro-text');
    const musicBtn = document.getElementById('playMusic');
    const music = document.getElementById('bgMusic');
    
    // Autoplay musik saat halaman dimuat
    music.play().then(() => {
        musicBtn.classList.add('playing');
        isPlaying = true;
    }).catch(err => {
        console.log('Error playing music:', err);
    });
    
    // Fungsi untuk mengontrol musik
    let isPlaying = true; // Set ke true karena musik autoplay
    musicBtn.addEventListener('click', function() {
        if (!isPlaying) {
            music.play().then(() => {
                this.classList.add('playing');
                isPlaying = true;
            }).catch(err => {
                console.log('Error playing music:', err);
            });
        } else {
            music.pause();
            this.classList.remove('playing');
            isPlaying = false;
        }
    });
    
    // Buat container untuk bintang
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    document.body.appendChild(starsContainer);

    // Buat bulan
    const moon = document.createElement('div');
    moon.className = 'moon';
    document.body.appendChild(moon);

    // Fungsi untuk membuat bintang
    function createStars() {
        for(let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.setProperty('--duration', `${Math.random() * 3 + 1}s`);
            starsContainer.appendChild(star);
        }
    }

    // Fungsi untuk membuat bintang jatuh
    function createShootingStar() {
        const star = document.createElement('div');
        star.className = 'shooting-star';
        document.body.appendChild(star);

        star.addEventListener('animationend', () => {
            star.remove();
        });
    }

    // Jalankan fungsi
    createStars();
    setInterval(createShootingStar, 4000);

    // Buka amplop setelah intro
    setTimeout(() => {
        introText.style.display = 'none';
        envelope.classList.add('open');
    }, 4000);

    // Event listener untuk tombol next page
    document.getElementById('nextPage').addEventListener('click', function() {
        const messages = [
            "Mungkin kamu heran dengan sikapku yang berbeda saat sendiri dan saat di depan orang lain. Percayalah, aku melakukan itu untuk melindungimu. Karena bagiku, kenyamananmu adalah yang paling penting. Aku hanya ingin kamu bisa menjalani hari-harimu tanpa merasa terganggu.",
            
            "Aku tahu kamu masih menyimpan kenangan tentang dia. Itu wajar, dan aku mengerti. Masa lalu memang tidak mudah dilupakan, apalagi dengan seseorang yang pernah sangat berarti. Aku tidak akan memintamu untuk melupakannya, karena setiap orang butuh waktu untuk bisa melangkah lagi.",
            
            "Kamu adalah orang yang luar biasa, Astrit. Jangan biarkan kesedihan ini menghalangi langkahmu. Dalam hidup, kita memang tidak selalu mendapatkan apa yang kita inginkan. Tapi aku yakin, setiap perpisahan pasti mengajarkan kita sesuatu yang berharga untuk masa depan.",
            
            "Mungkin aku bukan siapa-siapa, dan mungkin sikapku selama ini membuatmu ragu. Tapi ketahuilah, dalam diamku, dalam sikap dinginku, tersimpan harapan yang sederhana untukmu. Aku hanya ingin melihatmu bahagia, tanpa mengharap apapun darimu.",
            
            "Tetaplah menjadi Astrit yang aku kenal. Yang selalu berusaha bangkit saat jatuh, yang tetap melangkah meski terasa berat. Aku tahu tidak mudah untuk percaya lagi setelah kecewa. Tapi percayalah, kamu pantas bahagia, dengan atau tanpa seseorang di sisimu. Dan jika suatu saat nanti kita bertemu lagi, aku berharap kamu sudah menemukan kebahagiaanmu sendiri."
        ];

        // Sembunyikan tombol
        this.style.display = 'none';

        // Tampilkan semua pesan sekaligus dengan animasi fade in
        const messageContainer = document.querySelector('.message');
        const messageWrapper = document.createElement('div');
        messageWrapper.className = 'new-messages-wrapper';
        
        messages.forEach(message => {
            const p = document.createElement('p');
            p.textContent = message;
            p.classList.add('fade-in-message');
            messageWrapper.appendChild(p);
        });
        
        messageContainer.appendChild(messageWrapper);
    });
}); 