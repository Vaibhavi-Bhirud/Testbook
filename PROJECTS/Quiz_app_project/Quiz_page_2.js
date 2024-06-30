// Script for Probability page
const quizdata = [
    {
        question: 'An event in the probability that will never be happened is called as -',
        options: ['Unsure event', 'sure event', 'possible event', 'impossible event'],
        answer: 'impossible event'
    },

    {
        question: 'What will be the value of P(not E) if P(E) = 0.07?',
        options: ['90', '007', '0.93', '72'],
        answer: '0.93'

    },

    {
        question: 'What will be the probability of getting odd numbers if a dice is thrown?',
        options: ['1/2', '2', '4/2', '5/2'],
        answer: '1/2'

    },

    {
        question: 'What is the probability of getting a sum as 3 if a dice is thrown?',
        options: ['2/18', '1/18', '4', ' 1/36'],
        answer: '1/18'

    },

    {
        question: 'What is the probability of getting an even number when a dice is thrown?',
        options: ['1/6','1/2','1/3','1/4'],
        answer: '1/2'

    },

    {
        question: 'The probability of getting two tails when two coins are tossed is -',
        options: ['1/6','1/2','1/3','1/4'],
        answer: '1/4'

    },


    {
        question: ' What is the probability of getting the sum as a prime number if two dice are thrown?',
        options: ['5/24','5/12','5/30','1/4'],
        answer: '5/12'

    },


    {
        question: ' What is the probability of getting atleast one head if three unbiased coins are tossed?',
        options: ['7/8','1/2','5/8','8/9'],
        answer: '7/8'

    },


    {
        question: 'What is the probability of getting 1 and 5 if a dice is thrown once?',
        options: ['1/6','1/3','2/3','8/9'],
        answer: '1/3'

    },


    {
        question: ' What will be the probability of losing a game if the winning probability is 0.3?',
        options: ['0.5','0.6','0.7','0.8'],
        answer: '0.7'
    }


];
let currentquestion = 0;
let marks = 0;
let timeleft = 220;
const timer = document.getElementById("time");
const timerinteval = setInterval(function () {
    timeleft--;
    timer.textContent = timeleft;

    if (timeleft == 0) {
        clearInterval(timerinteval);

        submitanswer();
    }
}, 1000);


const lenght = quizdata.length;

function loadquestion() {
    const question_conatiner = document.getElementById('question_conatiner');
    const option_container = document.getElementById('option_container');
    const number = document.getElementById('number');

    question_conatiner.innerHTML = quizdata[currentquestion].question;

    option_container.innerHTML = '';
    quizdata[currentquestion].options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener('click', () => {
            button.style.backgroundColor = 'rgb(63, 197, 241)';
            button.style.color = 'white';
        })
        button.addEventListener('click', () => selectanswer(option));
        option_container.appendChild(button);
    })

    number.innerHTML = `${[currentquestion + 1]} / ${lenght}`;


}

function selectanswer(selectedoption) {
    const answer = quizdata[currentquestion].answer;

    if (selectedoption === answer) {

        display.innerHTML = selectedoption + ': <h4>your answer is correct</h4>';
        marks++
        const mark = document.getElementById('marks').innerHTML = `${marks} / 10`;
    } else {

        display.innerHTML = selectedoption + ':<h4> answer is wrong </h4> <br> The correct Answer is :' + answer;

    }

    const answerButtons = document.querySelectorAll('#option_container button');
    answerButtons.forEach(button => {
        button.disabled = true;
    });
    currentquestion++;
}


const click = document.getElementById('click');
click.addEventListener('mouseover', () => {
    click.style.backgroundColor = 'rgb(63, 197, 241)';
    click.style.color = 'white';
})

click.addEventListener('mouseout', () => {
    click.style.backgroundColor = 'white';
    click.style.color = 'rgb(63, 197, 241)';
})


function nextquestion() {


    display.innerHTML = '';
    if (currentquestion < quizdata.length) {
        loadquestion();
    } else {
        submitanswer();
    }
}

function submitanswer() {

    const scores = marks;
    const timed = timeleft;


    localStorage.setItem('key', scores);
    localStorage.setItem('timee', timed);

    window.location.href = 'result.html';


}
loadquestion();