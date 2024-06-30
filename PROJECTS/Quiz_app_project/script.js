// Script for Entering in quiz
const name = document.getElementById('name');
function enter() {
    const names = name.value;
    localStorage.setItem('named', names);


    const optionelement = document.getElementById('hidden');
    optionelement.style.display = 'flex';
}


// Script for Result Page
const timed = localStorage.getItem('timee');
const scored = localStorage.getItem('key');
const namef = localStorage.getItem('named');
const correct = localStorage.getItem('key');


document.getElementById('name').textContent = `${namef} your result is :`;
document.getElementById('timesss').textContent = `total time taken =  ${220 - timed} seconds `;
document.getElementById('scoress').textContent = `score =  ${scored}  `;
document.getElementById('attemp').textContent = `you attempted = 10`;
document.getElementById('correct').textContent = `correct = ${correct}`;
document.getElementById('wrong').textContent = `wrong = ${10 - correct}`;
document.getElementById('percentage').textContent = `percentage = ${correct / 10 * 100}.00%`;

