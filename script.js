// Sahneler arası geçiş
const scenes = document.querySelectorAll('.message');
let currentScene = 0;

function showNextScene() {
    scenes[currentScene].classList.remove('active');
    currentScene = (currentScene + 1) % scenes.length;
    scenes[currentScene].classList.add('active');
}

// Her 5 saniyede bir sahne değiştir
setInterval(showNextScene, 5000);

// Rastgele emoji oluşturma
function createFloatingEmoji() {
    const emojis = ['❤️', '😢'];
    const emoji = document.createElement('div');
    emoji.className = 'floating-emoji';
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Rastgele pozisyon
    const startX = Math.random() * window.innerWidth;
    const moveX = (Math.random() - 0.5) * 200;
    
    emoji.style.left = `${startX}px`;
    emoji.style.setProperty('--moveX', `${moveX}px`);
    
    document.querySelector('.floating-emojis').appendChild(emoji);
    
    // Animasyon bitince emojiyi kaldır
    emoji.addEventListener('animationend', () => {
        emoji.remove();
    });
}

// Her 2 saniyede bir yeni emoji oluştur
setInterval(createFloatingEmoji, 2000); 