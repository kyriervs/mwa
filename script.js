function revealMessage() {
    const hiddenMessage = document.getElementById('hidden-message');
    hiddenMessage.style.display = 'block';

    const button = document.getElementById('reveal-button');
    button.style.display = 'none';

    const audio = document.getElementById('love-song');
    audio.play();

}
