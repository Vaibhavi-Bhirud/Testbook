let seconds = 0;
let tens = 0;
let mins = 0;
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let getMins = document.querySelector('.mins');
let btnStart = document.querySelector('.start');
let btnStop = document.querySelector('.stop');
let btnReset = document.querySelector('.reset');
let interval;
// updating screen time
function updateDisplay() {
    getMins.textContent = String(mins).padStart(2, '0');
    getSeconds.textContent = String(seconds).padStart(2, '0');
    getTens.textContent = String(tens).padStart(2, '0');
}
// start timer
btnStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(() => {
        tens++;
        if (tens >= 100) {
            tens = 0;
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                mins++;
            }
        }
        updateDisplay();
    }, 10);
});
// stop button 
btnStop.addEventListener('click', () => {
    clearInterval(interval);
});
// reset button
btnReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = 0;
    seconds = 0;
    mins = 0;
    updateDisplay();
});