// QUESTIONS Scrip for pipes and cisterns page
const quizdata = [
    {
        question: 'Water flows into a cistern through two pipes. The first pipe can fill it in 4 hours, while the second pipe can fill it in 6 hours. If both pipes are opened simultaneously, how long will it take to fill the cistern?',
        options: ['2 hours', '3 hours', '4 hours', '5 hours'],
        answer: '3 hours'
    },

    {
        question: 'A pipe can fill a tank in 8 hours, while another pipe can empty the same tank in 12 hours. If both pipes are opened simultaneously, how long will it take to fill the tank?',
        options: ['4 hours', '6 hours', '8 hours', '12 hours'],
        answer: '6 hours'

    },

    {
        question: 'A tank is filled by three pipes with uniform flow. The first two pipes operating simultaneously fill the tank in the same time during which the tank is filled by the third pipe alone. The second pipe fills the tank 5 hours faster than the first pipe and 4 hours slower than the third pipe. The time required by the first pipe is:',
        options: ['6 hour', '10 hours', '15 hours', '30 hours'],
        answer: '15 hours'

    },

    {
        question: 'A tank can be filled by pipe A in 2 hours and pipe B in 6 hours. At 10 A.M. pipe A was opened. At what time will the tank be filled if pipe B is opened at 11 A.M.?',
        options: ['12.PM', '12:45 PM', '5 PM', ' 11:45 AM'],
        answer: '11:45 AM'

    },

    {
        question: 'A cistern has two taps attached to it. Tap B can empty the cistern in 45 minutes. But Tap A can fill the cistern in just 30 minutes. Rohit started both taps unknowingly but realized his mistake after 30 minutes. He immediately closed Tap B. Now after this, in how much time will the cistern be filled?',
        options: ['30 minutes', '45 minutes', '15 minutes', '20 minutes'],
        answer: '20 minutes'

    },

    {
        question: 'Pipe R can empty a full tank in 30 hours. But two pipes P and Q can fill a tank in 15 hours and 10 hours respectively. Ram unknowingly opened all three taps. After 2 hours Shyam realized it and closed Pipe R. Due to this mistake how much time more would it take to fill the tank?',
        options: ['18 minutes', '24 minutes', '1hour 20 minutes', '2hour 15 minutes'],
        answer: '24 minutes'

    },


    {
        question: 'There is a leak at the bottom of a cistern. Due to this it takes 8 hours to fill the cistern. Had there not been a leak, it would take one hour less to fill the cistern. How much time does it take for the leak to completely empty the cistern?',
        options: ['48 hours', '55hours', '56 hours', '15 hours'],
        answer: '56 hours'

    },


    {
        question: ' A tap having diameter "d" can empty a tank in 84 min. How long another tap having diameter "2d" take to empty the same tank?',
        options: ['21 minutes', '42 minutes', '168 minutes', '28 minutes'],
        answer: '21 minutes'

    },


    {
        question: 'A cistern is filled by Pipe A and Pipe B together in 2.4 hours. Pipe A alone can fill the cistern at the rate of 100 litres per hour. Pipe B alone can fill the cistern in 4 hours. What is the capacity of the cistern?',
        options: ['1200 liter', '600 liters', '1000 liters', '500 liters'],
        answer: '600 liters'

    },


    {
        question: 'Three pipes A, B and C can fill a tank from empty to full in 30 minutes, 20 minutes, and 10 minutes respectively. When the tank is empty, all the three pipes are opened. A, B and C discharge chemical solutions P,Q and R respectively. What is the proportion of the solution R in the liquid in the tank after 3 minutes?',
        options: ['5/11', '6/11', '7/11', '8/11'],
        answer: '6/11'
    }


];

let currentquestion = 0;
let marks = 0;
let timeleft = 220;
// TIMER
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

// FOR QUESTIONS LOADING
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

// FOR ANSWER SELECTION
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