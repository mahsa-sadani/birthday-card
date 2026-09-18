document.getElementById('surpriseBtn').addEventListener('click', function() {
    document.getElementById('greeting').style.display = 'none';
    
    this.style.display = 'none';

    const messageDiv = document.getElementById('message');
    messageDiv.classList.remove('hidden');

    for (let i = 0; i < 25; i++) {
        setTimeout(createHeart, i * 100);
    }
});

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
}
