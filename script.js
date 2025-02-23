// Sayfanın yüklenmesini bekle
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Sahneler arası geçiş
        const scenes = document.querySelectorAll('.message');
        let currentScene = 0;

        // Başlangıçta ilk sahneyi aktif et
        scenes[0].classList.add('active');

        function showNextScene() {
            try {
                // Mevcut sahneyi gizle
                scenes[currentScene].classList.remove('active');
                // Sonraki sahneye geç
                currentScene = (currentScene + 1) % scenes.length;
                // Yeni sahneyi göster
                scenes[currentScene].classList.add('active');
            } catch (error) {
                console.error('Sahne geçişinde hata:', error);
            }
        }

        // Her 5 saniyede bir sahne değiştir
        const sceneInterval = setInterval(showNextScene, 5000);

        // Rastgele emoji oluşturma
        function createFloatingEmoji() {
            try {
                const emojis = ['❤️', '😢'];
                const emoji = document.createElement('div');
                emoji.className = 'floating-emoji';
                emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                
                // Rastgele pozisyon
                const startX = Math.random() * window.innerWidth;
                const moveX = (Math.random() - 0.5) * 200;
                
                emoji.style.left = `${startX}px`;
                emoji.style.setProperty('--moveX', `${moveX}px`);
                
                const container = document.querySelector('.floating-emojis');
                if (container) {
                    container.appendChild(emoji);
                    
                    // Animasyon bitince emojiyi kaldır
                    emoji.addEventListener('animationend', () => {
                        emoji.remove();
                    });
                }
            } catch (error) {
                console.error('Emoji oluşturmada hata:', error);
            }
        }

        // Her 2 saniyede bir yeni emoji oluştur
        const emojiInterval = setInterval(createFloatingEmoji, 2000);

        // Sayfa kapatıldığında interval'ları temizle
        window.addEventListener('unload', () => {
            clearInterval(sceneInterval);
            clearInterval(emojiInterval);
        });
    } catch (error) {
        console.error('Genel bir hata oluştu:', error);
    }
}); 