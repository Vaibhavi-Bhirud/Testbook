// audio playing on key pressed
function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    
    if (!audio) return;

    audio.currentTime = 0; // Rewind to the start
    audio.play();

    key.classList.add('playing');
}

function removeTransition(event) {
    if (event.propertyName !== 'transform') return;

    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// event listener for pressed key
window.addEventListener('keydown', playSound);
